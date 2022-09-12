<script setup>
// DB DATA
const userId = 1
let userData = {
  1: {
    menstrualCycle: {
      
      9: {
        startDate: '2022/09/04',
        endDate: '2022/09/08',
        // { name: '', date: '' }
        events:[
          { name: 'intimate', date: '2022/09/09' },
          { name: 'spotting', date: '2022/09/10' }
        ]
      },
      10: {
        startDate: '2022/10/05',
        endDate: '2022/10/09',
        events:[
          { name: 'intimate', date: '2022/10/18' },
          { name: 'spotting', date: '2022/10/20' }
        ]
      }
      
    },
    moodLog: [
      { symptom: 'Hairfall', mood: 'Angry', date: '2022/09/05 03:09'  },
      { symptom: 'Shivering', mood: 'Thinking', date: '2022/09/06 03:09'  }
    ]
  }
}
let moodLog = userData[userId]['moodLog']
userData = userData[userId]['menstrualCycle']


// IMAGES
import shopImg from '@/assets/menstrualCyclePage/Shop.png'
import appointmentImg from '@/assets/menstrualCyclePage/Appointment.png'
import neutralImg from '@/assets/menstrualCyclePage/Neutral.png'
import communityImg from '@/assets/menstrualCyclePage/Community.png'

import anxityImg from '@/assets/menstrualCyclePage/symptoms/anxity.png'
import hairfallImg from '@/assets/menstrualCyclePage/symptoms/hairfall.png'
import noEnergyImg from '@/assets/menstrualCyclePage/symptoms/noEnergy.png'
import noMoistureImg from '@/assets/menstrualCyclePage/symptoms/noMoisture.png'
import shiveringImg from '@/assets/menstrualCyclePage/symptoms/shivering.png'
import sleepyImg from '@/assets/menstrualCyclePage/symptoms/sleepy.png'
import weakImg from '@/assets/menstrualCyclePage/symptoms/weak.png'
import weightLossImg from '@/assets/menstrualCyclePage/symptoms/weightLoss.png'

import angryImg from '@/assets/menstrualCyclePage/moods/angry.png'
import headacheImg from '@/assets/menstrualCyclePage/moods/headache.png'
import scaredImg from '@/assets/menstrualCyclePage/moods/scared.png'
import sickImg from '@/assets/menstrualCyclePage/moods/sick.png'
import temperatureImg from '@/assets/menstrualCyclePage/moods/temperature.png'
import thinkingImg from '@/assets/menstrualCyclePage/moods/thinking.png'
import tiredImg from '@/assets/menstrualCyclePage/moods/tired.png'
import sweatingImg from '@/assets/menstrualCyclePage/moods/sweating.png'



// IMPORTS
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n';
import router from '@/router'
const { t, locale, availableLocales } = useI18n();
import { useQuasar } from 'quasar'
const $q = useQuasar()

// VARIABLES
let myLocale = {
  days: 'रविवार_सोमवार_मंगलवार_ बुधवार_गुरुवार_शुक्रवार_शनिवार'.split('_'),
  daysShort: 'रविवा_सोमवा_मंगल_बुधवा_गुरुवा_शुक्रवा_शनिवा'.split('_'),
  months: 'जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर'.split('_'),
  monthsShort: 'जनव_फ़रव_मार्च_अप्रैल_मई_जून_जुला_अग_सितंब_अक्टू_नवंब_दिसं'.split('_'),
  firstDayOfWeek: 1,
  format24h: true,
  pluralDay: 'दिन'
}
const defaultYearMonth = moment().format('YYYY/MM')
let selectedMonth = moment().format('M')
let selectedYear = moment().format('YYYY')
let selectedDateDetails = null
let selectedMonthData = null


// REFs
let date = ref(null)
let selectedStatusOption = ref(null)
let openStatusDialog = ref(false)
let openMoodDialog = ref(false)
let openStatsDialog = ref(false)
let moodTab = ref('add')
let selectedMonthEvents = ref(null)
let predictCycleForMonth = ref(false)
let selectedMood = ref({ symptom: null, mood: null, date: null })
let statistics = ref({
  length: null,
  duration: null
})
let localLocale = ref({ label: 'English', value: 'en' })

// FUNCTIONS
function onDateSelect(value, reason, details) {
  console.log('onDateSelect', value, reason, details)

  if(reason !== 'locale') {
    selectedDateDetails = details
    selectedMonth = details.month
    
    openStatusDialog.value = true
    populateMonthDateAndEvent()
  }
}

function onStatusSubmit(option) {
  console.log('onStatusSubmit START', option, selectedDateDetails)

  if(userData[selectedDateDetails.month] === undefined) {
    userData[selectedDateDetails.month] = {
      startDate: null,
      endDate: null,
      // { name: '', date: '' }
      events:[]
    }
  }

  if(option === 'startDate') {
    userData[selectedDateDetails.month].startDate = formatDateDetails(selectedDateDetails)
  } else if(option === 'endDate') {
    if(userData[selectedDateDetails.month].startDate) {
      userData[selectedDateDetails.month].endDate = formatDateDetails(selectedDateDetails)
    } else {
      $q.notify({
        message: t('mcp_ss_no_sd'),
        color: 'red',
        icon: 'save_as',
        actions: [
          { label: t('mcp_mo_toast_dismiss'), color: 'black', handler: () => { /* ... */ } }
        ]
      })
      return
    }
  } else if(option === 'intimate' || option === 'spotting') {
    userData[selectedDateDetails.month].events.push({ name: option, date: formatDateDetails(selectedDateDetails) })
  }

  console.log('onStatusSubmit END', userData[selectedDateDetails.month])
  populateMonthDateAndEvent()

  $q.notify({
    message: t('mcp_ss_toast_text'),
    color: 'sh1',
    icon: 'save_as',
    actions: [
      { label: t('mcp_mo_toast_dismiss'), color: 'sh2', handler: () => { /* ... */ } }
    ]
  })
}

function formatDateDetails(dateDetails) {
  return `${dateDetails.year}/${('0' + dateDetails.month).slice(-2)}/${('0' + dateDetails.day).slice(-2)}`
}

function onCalendarNavigate(view) {
  console.log('Clicked Navigate', view)

  selectedMonth = view.month
  selectedYear = view.year
  populateMonthDateAndEvent()
}

function populateMonthDateAndEvent() {
  console.log('Inside populateMonthDateAndEvent', userData[selectedMonth])

  predictCycleForMonth.value = false

  if(userData[selectedMonth]) {
    selectedMonthData = userData[selectedMonth]
    
    // Events populate
    if(selectedMonthData.events) {
      selectedMonthEvents.value = selectedMonthData.events.map( obj => obj.date )
    }

    // Date populate
    if(selectedMonthData.startDate && selectedMonthData.endDate) {
      date.value = { from: selectedMonthData.startDate, to: selectedMonthData.endDate }
    } else if(selectedMonthData.startDate) {
      date.value = selectedMonthData.startDate
    } else {
      predictCycle()
    }
  } else {
    predictCycle()
  }
}

function predictCycle(doReturn = false) {
  let startDayArr = []
  let endDayArr = []
  let startDateArr = []
  
  for (const [key, value] of Object.entries(userData)) {
    if(value.startDate) {
      startDayArr.push(Number(moment(value.startDate, 'YYYY/MM/DD').format('D')))
      startDateArr.push(value.startDate)
    }

    if(value.endDate) {
      endDayArr.push(moment(value.endDate, 'YYYY/MM/DD').diff(moment(value.startDate, 'YYYY/MM/DD'), 'days'))
    }
  }

  if(doReturn) {
    const cycleLengthArr = []
    for(let i = 0; i < startDateArr.length; i++) {
      if(startDateArr[i+1]){
        cycleLengthArr.push(moment(startDateArr[i+1], 'YYYY/MM/DD').diff(moment(startDateArr[i], 'YYYY/MM/DD'), 'days'))
      }
    }
    return {
      length: _.round(_.mean(cycleLengthArr)),
      duration: _.round(_.mean(endDayArr))
    }
  }
  date.value = { 
    from: formatDateDetails({ year: selectedYear, month: selectedMonth, day: _.round(_.mean(startDayArr)) }),
    to: formatDateDetails({ year: selectedYear, month: selectedMonth, day: _.round(_.mean(startDayArr)) + _.round(_.mean(endDayArr)) })
  }

  predictCycleForMonth.value = true
}

function doStatistics() {
  openStatsDialog.value = true
  statistics.value = predictCycle(true)
}

function getEventColor(processedDate) {
  if(selectedMonthData && selectedMonthData.events) {
    const intimateEvents = []
    const spottingEvents = []
    selectedMonthData.events.map( obj => {
      if(obj.name === 'intimate')
        intimateEvents.push(obj.date)
      else if(obj.name === 'spotting')
        spottingEvents.push(obj.date)
    })
    if(intimateEvents.includes(processedDate))
      return 'heart'
    else if(spottingEvents.includes(processedDate))
      return 'spot'
  }

  return 'teal'
}

function addMood(type, value) {
  selectedMood.value[type] = value
  console.log(selectedMood)
}

function onSubmitMood() {
  selectedMood.value.date = moment().format('YYYY/MM/DD HH:mm')
  moodLog.push(selectedMood.value)
  selectedMood.value = { symptom: null, mood: null, date: null }
  $q.notify({
    message: t('mcp_mo_toast_text'),
    color: 'sh1',
    icon: 'save_as',
    actions: [
      { label: t('mcp_mo_toast_dismiss'), color: 'sh2', handler: () => { /* ... */ } }
    ]
  })
}

function gotoPage(url) {
  router.push({ path: url })
}

function onLocaleChange(value) {
  console.log('onLocaleChange', localLocale, value)
  locale.value = value.value
}


populateMonthDateAndEvent()

</script>

<template>
  

<div style=" display: flex; flex-direction: column; min-height: 500px; justify-content: center;
    align-items: center;
    column-gap: 30px;">

  <div style="display: flex;
    justify-content: flex-end;
    width: 100%;
    padding: 25px;">
    <q-select style="width: 150px;" rounded outlined v-model="localLocale" @update:model-value="onLocaleChange"  :options="[{ label: 'English', value: 'en' }, { label: 'Hindi', value: 'hi' }]" label="Language" dense options-dense />
  </div>
  
  <!-- HEADING -->
  <div style="font-size: 32px; font-weight: 500; margin-top: 10px;">
    {{t('mcp_title')}}
  </div>

  <!-- CALENDER -->
  <div style="margin-top: 50px;">
    <q-date
      
      v-model="date"
      :color="predictCycleForMonth ? 'sh2' : 'sh1'"
      :text-color="predictCycleForMonth ? 'black' : 'white'"
      :default-year-month="defaultYearMonth"
      :events="selectedMonthEvents"
      :event-color="(date) => getEventColor(date)"
      :locale="locale === 'hi' ? myLocale : null"

      @update:model-value="onDateSelect"
      @navigation="onCalendarNavigate" />
  </div>

  <!-- LINKS -->
  <div style="display: flex; flex-direction: row; margin: 100px 0; width: 100%; gap: 100px; justify-content: center;">
    <div class="box-link-items" style="background: #F7FFFF;" @click="gotoPage('/market-place')">
      <img :src="shopImg" alt="" style="background: #F7FFFF;">
      <div>
        {{t('mcp_link_market')}}
      </div>
    </div>
    <div class="box-link-items" @click="gotoPage('/book-appointment')">
      <img :src="appointmentImg" alt="">
      <div>
        {{t('mcp_link_app')}}
      </div>
    </div>
    <div class="box-link-items" style="background: #F7FFFF;" @click="openMoodDialog = true">
      <img :src="neutralImg" alt="" style="background: #F7FFFF;">
      <div>
        {{t('mcp_link_sym')}}
      </div>
    </div>
    <div class="box-link-items" style="background: #F7FFFF;" @click="doStatistics">
      <img :src="appointmentImg" alt="" style="background: #F7FFFF;">
      <div>
        {{t('mcp_link_stats')}}
      </div>
    </div>
    <div class="box-link-items" @click="gotoPage('/community-support')">
      <img :src="communityImg" alt="">
      <div>
        {{t('mcp_link_com')}}
      </div>
    </div>
  </div>

</div>

<!-- SELECT STATUS MODAL/DIALOG -->
<q-dialog v-model="openStatusDialog">
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">{{t('mcp_ss_title')}}</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-card-section>
      <q-option-group
        :options="[
          { label: t('mcp_so_start'), value: 'startDate' },
          { label: t('mcp_so_end'), value: 'endDate' },
          { label: t('mcp_so_inti'), value: 'intimate' },
          { label: t('mcp_so_spot'), value: 'spotting' }
        ]"
        type="radio"
        v-model="selectedStatusOption"
        color="cyan"
      /> 
    </q-card-section>
    <q-card-actions align="right" class="row bg-white text-teal" style=" padding: 25px;">
      <q-btn v-close-popup color="secondary" size="lg" :label="t('mcp_ss_done')" padding="xs lg" :disable="selectedStatusOption === null" @click="onStatusSubmit(selectedStatusOption)" />
    </q-card-actions>
  </q-card>
</q-dialog>

<!-- STATS MODAL/DIALOG -->
<q-dialog v-model="openStatsDialog">
  <q-card style="width: 700px; max-width: 80vw;">
    <q-card-section class="row items-center q-pb-none">
      <div class="text-h6">{{t('mcp_stats_title')}}</div>
      <q-space />
      <q-btn icon="close" flat round dense v-close-popup />
    </q-card-section>

    <q-card-section style="text-align: center;">
      <h5>{{t('mcp_stats_length')}}</h5>
      <q-chip square size="xl">
        <q-avatar color="sh1" text-color="white">{{statistics.length}}</q-avatar>
        {{t('mcp_stats_days')}}
      </q-chip>
      <h5>{{t('mcp_stats_duration')}}</h5>
      <q-chip square size="xl">
        <q-avatar color="sh1" text-color="white">{{statistics.duration}}</q-avatar>
        {{t('mcp_stats_days')}}
      </q-chip>
    </q-card-section>
    <q-card-actions align="right" class="row bg-white text-teal" style=" padding: 25px;">
      <q-btn v-close-popup color="secondary" size="lg" :label="t('mcp_stats_ok')" padding="xs lg" />
    </q-card-actions>
  </q-card>
</q-dialog>

<!-- MOOD MODAL/DIALOG -->
<q-dialog v-model="openMoodDialog">
  <q-card style="width: 80vw; max-width: 80vw;">
    <q-tabs
      v-model="moodTab"
      narrow-indicator
      class="bg-sh2 text-black shadow-2"
      style="font-size: 50px;"
      align="justify"
      inline-label
    >
      <q-tab name="add" icon="playlist_add" :label="t('mcp_mo_add')" />
      <q-tab name="logs" icon="subject" :label="t('mcp_mo_logs')" />
    </q-tabs>

    <q-separator />

    <q-tab-panels v-model="moodTab" animated>
      <q-tab-panel name="add">
        <div style="display: flex;">
          <div class="add-mood-panel">
            <img :src="anxityImg" alt="" @click="addMood('symptom', 'Anxity')">
            <img :src="noEnergyImg" alt="" @click="addMood('symptom', 'No Energy')">
            <img :src="hairfallImg" alt="" @click="addMood('symptom', 'Hair Fall')">
            <img :src="noMoistureImg" alt="" @click="addMood('symptom', 'No Moisture')">
            <img :src="shiveringImg" alt="" @click="addMood('symptom', 'Shivering')">
            <img :src="sleepyImg" alt="" @click="addMood('symptom', 'Sleepy')">
            <img :src="weakImg" alt="" @click="addMood('symptom', 'Weak')">
            <img :src="weightLossImg" alt="" @click="addMood('symptom', 'Weight Loss')">
          </div>
          <div class="add-mood-panel">
            <img :src="angryImg" alt="" @click="addMood('mood', 'angry')">
            <img :src="headacheImg" alt="" @click="addMood('mood', 'headache')">
            <img :src="scaredImg" alt="" @click="addMood('mood', 'scared')">
            <img :src="sickImg" alt="" @click="addMood('mood', 'sick')">
            <img :src="temperatureImg" alt="" @click="addMood('mood', 'temperature')">
            <img :src="thinkingImg" alt="" @click="addMood('mood', 'thinking')">
            <img :src="tiredImg" alt="" @click="addMood('mood', 'tired')">
            <img :src="sweatingImg" alt="" @click="addMood('mood', 'sweating')">
          </div>
        </div>
        <div style="display: flex; margin-top: 25px;">
          <div class="add-mood-panel">
            {{t('mcp_mo_sym')}} - {{ selectedMood.symptom == null ? 'Not Selected' : selectedMood.symptom }}
          </div>
          <div class="add-mood-panel">
            {{t('mcp_mo_mood')}} - {{ selectedMood.mood == null ? 'Not Selected' : selectedMood.mood }}
          </div>
        </div>
        <q-card-actions align="right" class="row bg-white text-teal" style="margin-top: 25px;">
          <q-btn v-close-popup color="secondary" size="lg" :label="t('mcp_ss_done')" padding="xs lg" :disable="selectedMood.symptom == null || selectedMood.mood == null" @click="onSubmitMood" />
        </q-card-actions>
      </q-tab-panel>

      <q-tab-panel name="logs">
        <div>
          <q-list>
            <div v-for="obj in moodLog" :key="obj">
              <q-item>
                <q-item-section>
                  <q-item-label>{{obj.symptom}}</q-item-label>
                  <q-item-label caption>{{obj.mood}} --  mahi magi mahi magi mahi magi mahi magi mahi</q-item-label>
                </q-item-section>

                <q-item-section side top>
                  <q-item-label caption>{{obj.date}}</q-item-label>
                </q-item-section>
              </q-item>
              <q-separator spaced inset />
            </div>
          </q-list>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </q-card>
</q-dialog>

</template>

<style scoped>
  * { 
    font-family: 'Montserrat', sans-serif !important;
  }

  .box-link-items {
    width: 200px;
    height: 200px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background: #FFFFF5;
    display: flex;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 10px;
    cursor: pointer;
  }

  .box-link-items > img {
    position: absolute; bottom: 173px; left: 75px;
    border-radius: 50px;
    background: #FFFFF5;
  }

  .box-link-items > div {
    font-size: 24px;
  }

  .add-mood-panel {
    display: flex; width: 50%; flex-wrap: wrap; gap: 15px; justify-content: center;
  }

  .add-mood-panel img {
    width: 83px;
    height: 81px;
    cursor: pointer;
  }

</style>