<template>
  <div>
    <p v-if="!pinboardPosts">
      Loading...
    </p>
    <div>
      <ul class="list-group">
        <li :key="post.time" class="list-group-item" v-for="post in pinboardPosts">{{ post.description }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
const axios = require('axios')

export default {
  data() {
    return {
      pinboardPosts: null,
      jsonObj: null
    }
  },
  //https://api.pinboard.in/v1/posts/recent
  mounted() {
    const opts = {
      headers: { 'X-API-Key': 'xrph7k7VHW2AmPP3wsTKU2t3HdzBNrbS71pJhxeh' }
    }
    axios.get('https://vxn7vzwjpj.execute-api.us-east-1.amazonaws.com/default/pinboard-recent', opts).then((resp) => {
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
