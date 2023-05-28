import { defineComponent } from '../vendor/vue.esm-browser.js';
import MeetupAgendaItem from './MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupAgenda',

  components: {
    MeetupAgendaItem,
  },

  props: {
    agenda: {
      required: true,
      type: Array,
      defaults: () => [],
    }
  },

  template: `
    <ul class="agenda">
      <li
        v-for="agendaItem in agenda"
        class="agenda__item"
      >
        <MeetupAgendaItem :agenda-item="agendaItem" />
      </li>
    </ul>`,
});
