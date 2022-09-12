<script>
import discussionSummary from '../../components/community_forum/discussionSummary.vue'
import staticThreadData from '../../utils/forumStaticData.js'
export default {
  data() {
    return {
      discussionThreadInput: [ ],
    }
  },
  components: {
      DiscussionSummary: discussionSummary
  },
  methods: {
    getTags() {
      let tempObj = {}
      this.discussionThreadInput.forEach(thread => {
        let localTags = thread.tags
        localTags.forEach(localTag => {
          tempObj[localTag] = isNaN(tempObj[localTag]) ? 1 : tempObj[localTag] + 1
        })
      });
      return tempObj
    },
    doctorThreads() {
      let freq = 0
      this.discussionThreadInput.forEach(thread => {
        if (thread.postedBy === 'doctor')
          freq += 1
      });
      return freq
    },
    userThreads() {
      let freq = 0
      this.discussionThreadInput.forEach(thread => {
        if (thread.postedBy != 'doctor')
          freq += 1
      });
      return freq
    }
  },
  mounted() {
    this.discussionThreadInput = staticThreadData.staticThreadData
    this.tags = this.getTags()
  }
}
</script>

<template>
  <div class="container row ibm-plex-sans">
    <div class="col-7">

      <!-- Post New Discussion -->
      <div class="discussionThreads">
        <DiscussionSummary :discussion_input="null"></DiscussionSummary>
      </div>

      <!-- Existing Discussions -->
      <div class="discussionThreads" v-for="thread in discussionThreadInput" :key="thread.discussion_header">
        <DiscussionSummary :discussion_input="thread"></DiscussionSummary>
      </div>
    </div>
    <div class="col-4">

      <!-- Number of Threads by doctor and non doctor -->
      <q-card class="statsHeader">
        <q-card-section>
          <div class="statisticsCardHeader">Number of Threads</div>
          <q-separator  />
          <ul class="staticsList">
            <li class="statisticsData" style="background: #F6FFFF">

              <q-icon class="text-dark repliesIcon" size="sm">
                <img src="../../assets/verified.svg"/>
              </q-icon>
              <span class="statisticsDataTag">Verified</span> <span class="statisticsDataFreq"> {{ doctorThreads() }} </span>
            </li>
            <li class="statisticsData" style="background: #FFFFF5">
              <q-icon class="text-dark repliesIcon" size="sm">
                <img src="../../assets/unverified.svg"/>
              </q-icon>
              <span class="statisticsDataTag">UnVerified</span> <span class="statisticsDataFreq"> {{ userThreads() }} </span>
            </li>
          </ul>
        </q-card-section>        
      </q-card>

      <!-- Statistics Card  -->
      <q-card class="statsHeader">
        <q-card-section>
          <div class="statisticsCardHeader">Statistics</div>
          <q-separator  />
          <ul class="staticsList">
            <li v-for="(tag, freq) in getTags()" :key="tag" class="statisticsData">
              <span class="statisticsDataTag">#{{ freq }}</span> <span class="statisticsDataFreq"> {{ tag }}</span>
            </li>
          </ul>
        </q-card-section>
        
      </q-card>


    </div>
  </div>
</template>

<style scoped>
.container {
  padding-top: 50px;
  padding-left: 80px;
  margin-top:20px;
  color: #F5F5F5;
}
.discussionThreads {
  padding-bottom: 30px;
}
.statsHeader {
  margin-bottom: 25px;
  margin-left: 50px;
  /* width: 424px; */
  contain: content;
  background: #F6F5FF;
  border-radius: 20px;
}
.statisticsCardHeader {
  padding: 5px;
  margin: 5px;
  /* height: 28px;
  left: 985px; */
  
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 44%;
  letter-spacing: 0.05em;
  text-transform: capitalize;
  color: #000000;
}
.statisticsData {
  padding: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.10);
  background-color: #DDB8DC;
  border-radius: 5px;
  margin: 5px;
}
.staticsList {
  width: 100%;
  text-align: -webkit-center;
  margin-left: 0px;
  padding-left: 0px;
}
.statisticsDataTag {
min-width: 200px;

font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 58%;

display: inline-flex;
align-items: center;
letter-spacing: 0.05em;
text-transform: capitalize;

color: #000000;
}
.statisticsDataFreq {
  

font-style: normal;
font-weight: 300;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.05em;
text-transform: capitalize;

color: #000000;
}
</style>