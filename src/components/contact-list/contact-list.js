import axios from "axios";

import contactCard from "../contact-card/index.vue"

export default {
  name: "contact-list",
  components: {
    "contact-card": contactCard
  },
  props: [],
  data() {
    return {
      contacts: []
    };
  },
  mounted() {
    axios
      .get("https://s3.amazonaws.com/technical-challenge/v3/contacts.json")
      .then(res => {
        this.contacts = res.data;
      });
  }
};
