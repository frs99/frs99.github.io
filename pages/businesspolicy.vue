<template>
  <main class="p-b main-business">
    <div class="BusinessPolicy m-c">
      <TextSpeak 
      title="Business Policy"
      message="Hello again
              On this page you will find the work policy or what it means the way
              in which the work will be done between you and me.
              The policy is divided into three parts:
                - Payment Policy
                - Shipping Policy
                - Return Policy

              You can find out more below:"
      />

      <div class="box-link-srv d-f-c to-space-between m-c">
        <Links
        title="Payment Policy"
        info="How and when is the payment made?"
        link="#"
        />

        <Links
          title="Shipping Policy"
          info="How is the order shipped to you?"
          link="#"
        />

        <Links
          title="Return Policy"
          info="What happens if you don't like the order?"
          link="#"
        />
      </div>
    </div>

    <Thanks />
  </main>
</template>

<script>

import TextSpeak from '../components/blog/text-speak.vue';
import Links from '../components/blog/Links.vue';
import Thanks from '../components/Thanks.vue';
export default {
  components:{
    TextSpeak,
    Links,
    Thanks
  },
  mounted: () => {
    document.getElementsByTagName("footer")[0].classList.add("op0")
  }
}
</script>