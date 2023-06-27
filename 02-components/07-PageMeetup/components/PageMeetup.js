import {defineComponent, toRaw} from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import {fetchMeetupById} from '../meetupService.js';
import MeetupView from '../../06-MeetupView/components/MeetupView';

export default defineComponent({
  name: 'PageMeetup',
  data() {
    return {
      meetup: null,
      loading: true,
      errorLoadMeetup: true,
      errorMessage: '',
    }
  },

  fetchMeetupById,

  props: {
    meetupId: {
      type: Number,
      required: true,
    }
  },

  components: {
    MeetupView,
    UiAlert,
    UiContainer,
  },


  watch: {
    meetupId: {
      immediate: true,
      handler() {
        this.loading = true
        this.errorLoadMeetup = false
        fetchMeetupById(this.meetupId)
          .then(resolve => {
            this.meetup = resolve
            this.loading = false
          },(reject) => {
            this.errorMessage = reject.message
            this.loading = false
            this.errorLoadMeetup = true
          })
      }
    },
  },

  template: `
    <div class="page-meetup">
    <UiContainer v-if="loading || errorLoadMeetup">
      <UiAlert v-if="loading">Загрузка...</UiAlert>
      <UiAlert v-else-if="errorLoadMeetup">{{ errorMessage }}</UiAlert>
    </UiContainer>
    <meetup-view v-else :meetup="meetup"/>
    </div>`,
});
