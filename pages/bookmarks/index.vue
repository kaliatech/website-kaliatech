<template>
  <div class="container">
    <h1>Bookmarks</h1>
    <p class="lead">
      Running list of Internet links I've saved or found interesting for whatever reason. Most recent at the top.
    </p>
    <p>
      To search and filter entire set, use
      <a href="https://pinboard.in/u:kaliatech">https://pinboard.in/u:kaliatech</a>
      .
    </p>
    <p v-if="!pinboardPosts">Loading...</p>

    <div v-for="post in pinboardPosts" :key="post.time" class="row no-gutters">
      <div class="col-9 col-lg-10 bookmark-col" style="border-top-left-radius: 8px; border-bottom-left-radius: 8px">
        <div class="p-3">
          <a :href="post.href" class="align-items-start mb-1" :title="post.description">
            <div class="w-100 justify-content-between">
              <h5 class="mb-0 text-truncate pr-3">{{ post.description }}</h5>
            </div>
            <small class="d-block text-truncate">
              {{ post.href }}
            </small>
          </a>
          <p
            class="small-xx mt-1 mb-0"
            v-if="post.extended"
            v-text="post.extended ? post.extended.replace('<blockquote>', '').replace('</blockquote>', '') : ''"
          />
        </div>
      </div>

      <div
        class="col-3 col-lg-2 text-right bookmark-col"
        style="border-top-right-radius: 8px; border-bottom-right-radius: 8px"
      >
        <div class="pt-3 pr-3 pb-0">
          <a :href="`https://pinboard.in/u:kaliatech/t:${tag}`">
            <div
              :key="tag"
              class="p-2 ml-1 mb-1 btn btn-light btn-link btn-sm text-nowrap"
              v-for="tag in post.tags.split(' ')"
            >
              {{ tag }}
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col mt-3">
        <a href="https://pinboard.in/u:kaliatech">
          <button class="btn btn-primary">More...</button>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pinboardPosts: null,
      jsonObj: null,
    }
  },
  head() {
    return {
      title: 'Bookmarks | Kaliatech',
    }
  },
  mounted() {
    document.querySelector('body').style['overflow-y'] = 'scroll'

    const opts = {
      headers: { 'X-API-Key': 'xrph7k7VHW2AmPP3wsTKU2t3HdzBNrbS71pJhxeh' },
    }
    // https://api.pinboard.in/v1/posts/recent
    this.$axios
      .get('https://vxn7vzwjpj.execute-api.us-east-1.amazonaws.com/default/pinboard-recent?count=50', opts)
      .then((resp) => {
        this.jsonObj = resp.data
        // TODO: This is  temporary workaround. Sometime in 2020-06, the JSON response parsing started failing, apparently
        //       due to the UTF-8 BOM marker. I don't know what changed, and only obvious culprit is the Pinboard API.
        // eslint-disable-next-line
        if (this.jsonObj.charCodeAt(0) === 0xfeff) {
          this.jsonObj = this.jsonObj.slice(1)
        }
        this.pinboardPosts = JSON.parse(this.jsonObj).posts
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
  },
}
</script>
<style lang="scss">
.bookmark-col {
  background-color: #eceeef;
  padding-bottom: 1rem;
  margin-bottom: 0.5rem;
}
</style>
