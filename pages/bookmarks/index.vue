<template>
  <div class="container">
    <h1>Bookmarks</h1>
    <p class="lead">
      Links to items on the Internet I've found interesting for whatever reason.
    </p>
    <p>
      To search and filter entire set, use <a href="https://pinboard.in/u:kaliatech">https://pinboard.in/u:kaliatech</a>.</p>
    <p v-if="!pinboardPosts">
      Loading...
    </p>

    <div class="list-group">
      <a v-for="post in pinboardPosts"
         :key="post.time"
         :href="post.href"
         class="list-group-item flex-column align-items-start mb-1">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{ post.description }}</h5>
          <small>
            <span v-for="tag in post.tags.split(' ')"
                  :key="tag"
                  class="badge badge-light p-1 mr-1"><a :href="'https://pinboard.in/u:kaliatech/t:' + tag">{{ tag }}</a>
            </span>
          </small>
        </div>
        <p v-if="post.extended"
           class="small-xx mb-0"
           v-text="post.extended ? post.extended.replace('<blockquote>', '').replace('</blockquote>', '') : ''"/>
      </a>
    </div>
    <div>
      <a href="https://pinboard.in/u:kaliatech">
        <button class="btn btn-primary">More</button>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  head () {
    return {
      title: 'Bookmarks | Kaliatech'
    }
  },
  data () {
    return {
      pinboardPosts: null,
      jsonObj: null
    }
  },
  //https://api.pinboard.in/v1/posts/recent
  created () {
  },
  mounted () {
    document.querySelector('body').style['overflow-y'] = 'scroll'

    const opts = {
      headers: {'X-API-Key': 'xrph7k7VHW2AmPP3wsTKU2t3HdzBNrbS71pJhxeh'},
    }
    this.$axios.get("https://vxn7vzwjpj.execute-api.us-east-1.amazonaws.com/default/pinboard-recent?count=50", opts)
      .then((resp) => {
        this.jsonObj = resp.data
        this.pinboardPosts = JSON.parse(resp.data).posts
      })

    // {
    //   "posts": [
    //     {
    //       "href": "https:\/\/dzone.com\/articles\/how-much-does-it-cost-to-develop-an-app-3?amp%3Butm_source=feedpress.me&amp%3Butm_campaign=Feed%3A%2520dzone",
    //       "description": "How Much Does It Cost to Develop an App? - DZone Agile",
    //       "extended": "<blockquote>How much the development of an application, whether mobile- or web-based, depends on a number of complex factors, but there are some elements each app needs.<\/blockquote>",
    //       "meta": "0d0afc24796b0b67a9a756012ac4aebb",
    //       "hash": "845d889ce7e89617b8c8fef0db18a6f8",
    //       "time": "2018-09-10T12:48:11Z",
    //       "shared": "no",
    //       "toread": "no",
    //       "tags": "business"
    //     }
    //   ]
    // }

  }

}
</script>
