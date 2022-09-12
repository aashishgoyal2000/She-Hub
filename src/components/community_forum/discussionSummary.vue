<script>
export default {
  props: {
    discussion_input: {
      type: Object
    },
    is_meetup: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hasttags: {
        type: []
      },
      discussion_header: {
        type: String
      },
      no_of_votes: {
        type: String
      },
      no_of_replies: {
        type: String
      },
      no_of_views: {
        type: String
      },
      discussion_summary: {
        type: String
      },
      postedBy: {
        type: String
      },
      postedOn: {
        type: String
      },
      backgroundColor: {
        type: String
      },
      extended: {
        type: Boolean
      },
      replies: {
        type: []
      },
      tempReply: {
        type: String
      },
      new_discussion: {
        type: Boolean
      },
      new_discussion_title: {
        type: String
      },
      new_discussion_summary: {
        type: String
      },
      new_discussion_tags: {
        type: String
      },
      userType: {
        type: String
      }
    }
  },
  methods: {
    showThreads() {
      this.extended = !this.extended;
    },
    saveReply() {
      this.replies.push({
        comment: this.tempReply,
        postedBy: 'user'
      })
      this.tempReply = ''
    },
    saveNewDiscussion() {
      this.new_discussion = false;
      this.discussion_header = this.new_discussion_title
      this.discussion_summary = this.new_discussion_summary
      this.no_of_replies = 0
      this.no_of_views = 0
      this.no_of_votes = 0
      this.hasttags = this.new_discussion_tags
      this.postedBy = 'user'
      this.postedOn = 'tpday'
      this.replies = []
      if (this.postedBy === 'doctor')
        this.backgroundColor = "#F6FFFF";
      else 
        this.backgroundColor = "#FFFFF5";
    }
  },
  mounted() {
    if (this.discussion_input == null)
    {
      this.new_discussion = true;
      this.backgroundColor = "#FFFFF5";
    }
    else {
      this.new_discussion = false;
      this.discussion_header = this.discussion_input.discussion_header
      this.discussion_summary = this.discussion_input.discussion_summary
      this.no_of_replies = this.discussion_input.no_of_replies
      this.no_of_views = this.discussion_input.no_of_views
      this.no_of_votes = this.discussion_input.no_of_votes
      this.hasttags = this.discussion_input.tags
      this.postedBy = this.discussion_input.postedBy
      this.postedOn = this.discussion_input.postedOn
      this.replies = this.discussion_input.replies
      if (this.postedBy === 'doctor')
        this.backgroundColor = "#F6FFFF";
      else 
        this.backgroundColor = "#FFFFF5";
    }
    this.new_discussion_title = ''
    this.new_discussion_summary = ''
    this.new_discussion_tags = ''
    this.extended = false;
    this.tempReply = ''
  }
}

</script>

<template>
  <q-card class="discussionCard ibm-plex-sans" flat bordered :style="`backgroundColor: ${backgroundColor}`" >
    <q-card-section>
      <q-card-section @click="showThreads()">
        <!-- Title -->

        <div class="discussionHeader" v-if="new_discussion"> Start New Discussion </div>

          <!-- Input -->
          <div class="discussionHeader" v-if="new_discussion">
            <q-input bottom-slots v-model="new_discussion_title" label="Title" />
          </div>
          <!-- For Existing Discussions -->
          <div class="discussionHeader" v-else> {{ discussion_header }} 
            <q-space></q-space>
            <div class="iconDiv2" v-if="is_meetup">
              <q-icon class="text-dark iconImgClass2" size="sm">
                <img src="../../assets/location.png"/>
              </q-icon>
              <!-- <span class="iconDesc2"> Location </span> -->
            </div>
            </div>

          <div v-if="new_discussion" class="new_userType">
            <q-radio v-model="userType" val="self" label="Post as yourself" />
            <q-radio v-model="userType" val="anonamus" label="Post using nickname" />
          </div>
      

        <!-- Summary -->
        <!-- Input -->
        <div class="discussionSummary" v-if="new_discussion">
            <q-input bottom-slots v-model="new_discussion_summary" label="Summary" >
              <template v-slot:after>
                <q-icon class="text-dark iconImgClass" size="sm">
                  <img src="../../assets/mic.png"/>
                </q-icon>
                <q-icon class="text-dark iconImgClass" size="sm">
                  <img src="../../assets/upload.jpg"/>
                </q-icon>
              </template>
              </q-input>
            <q-space></q-space>
            <div class="discussionSummary"></div>
          </div>
        <div class="discussionSummary" v-else> {{ discussion_summary }} </div>

        <div class="hashtagClass" v-if="new_discussion">
          <q-input bottom-slots v-model="new_discussion_tags" label="Comma Seperated Tags" >
          
            <template v-slot:after>
              <q-btn round dense flat icon="send" @click="saveNewDiscussion()" />
            </template>
          </q-input>
        </div>
        <q-space v-if="new_discussion"/>
        <div v-if="new_discussion" class="hashtagClass"> </div>

        <q-card-actions v-if="!new_discussion && !is_meetup">
          <!-- Hashtags -->
          <q-btn v-for="item in hasttags" class="hashtagClass" :key="item" flat disable> #{{ item }}</q-btn>
          <!-- Empty Space between hashtags and number of replies -->
          <q-space />

          <!-- number of comments -->
          <div class="iconDiv">
            <q-icon class="text-dark iconImgClass" size="sm">
              <img src="../../assets/VotesIcon.svg"/>
            </q-icon>
            <span class="iconDesc"> {{ no_of_votes }} votes </span>
          </div>
          
          <!-- number of votes -->
          <div class="iconDiv">
            <q-icon class="text-dark iconImgClass" size="sm">
              <img src="../../assets/NoOfReplies.svg"/>
            </q-icon>
            <span class="iconDesc"> {{ no_of_replies }} replies </span>
          </div>

          <!-- number of views -->
          <div class="iconDiv">
            <q-icon class="text-dark iconImgClass" size="sm">
              <img src="../../assets/NoOfViews.svg"/>
            </q-icon>
            <span class="iconDesc"> {{ no_of_views }} views </span>
          </div>
        </q-card-actions>
      </q-card-section>        
    </q-card-section>
    
    <q-card-section v-if="extended && !new_discussion">
      <q-separator></q-separator>
      <div v-for="reply in replies" :key="reply" class="replyClass">
        <q-icon class="text-dark repliesIcon" size="sm">
          <img v-if="reply.postedBy === 'doctor'" src="../../assets/verified.svg"/>
          <img v-else src="../../assets/unverified.svg"/>
        </q-icon>{{ reply.comment }}
      </div>
      <!-- Add New Reply -->
      <div class="replyClass">
        <q-input bottom-slots v-model="tempReply" label="Your Views">
        <template v-slot:before>
          <q-avatar>
            <img src="../../assets/unverified.svg">
          </q-avatar>
        </template>

        <template v-slot:hint>
          Join the discussion by posting your views
        </template>

        <template v-slot:after>
          <q-btn round dense flat icon="send" @click="saveReply()" />
        </template>
      </q-input>


      </div>

    </q-card-section>
  </q-card>
</template>

<style scoped>
.repliesIcon {
  padding: 5px;
}
.replyClass {
  color: black;
  padding: 5px;
}
.discussionHeader {
  
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  /* text-transform: capitalize; */
  color: #000000;
}
.q-card__actions {
  padding-left: 0px;
}
.discussionSummary {
  margin-top: 15px;
  
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 125%;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  /* text-transform: capitalize; */
  color: #000000;
}
.discussionCard {
  background: var(backgroundColor);
  width: 100%;
  contain: content;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.iconDesc {
  position: absolute;
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
}
.iconDiv2 {
  /* contain: content; */
}
.iconImgClass2 {

}
.iconDesc2 {
  /* position: absolute; */
  font-style: normal;
  font-weight: 300;
  font-size: 8px;
  display: flex;
  align-items: center;
  letter-spacing: 0.05em;
  color: #000000;
}
.iconImgClass {
  padding-left: 5px;
}
.iconDiv {
  align-self: center;
  padding-left: 10px;
  margin: 10px;
  max-width: 40px;
  min-width: 40px;
}
.hashtagClass {
  height: 20px;
  padding: 0px 0px;
  
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 167%;
  align-items: center;
  /* text-transform: capitalize; */
  color: #000000;
}
.new_userType {
  margin-left: 0px;
  padding-left: 0px;
  display: inline-grid;
}
</style>