<template>
  <section class="box-services m-c">
      <TextSpeak
        title="My services"
        message="Welcome
                I am Fares. You may have some know things about me from a page about me, and I am glad that you are now on this page.
                And most likely you are interested in working together.
                I am happy to tell you that we can work together within the limits of services that I can provide for you.
                You can see my portfolio and what I do, and you can view the business policy and how it is, and then you can contact me from the contact button.
        "
      />

      <div class="box-link-srv d-f-c to-space-between m-c">
        <Links
          title="Portfolio"
          info="See my work and what I can do."
          link="/portfolio/"
        />

        <Links
          title="Business Policy"
          info="How do we agree And the way it works?"
          link="/businesspolicy"
        />

        <Links
          title="Contact"
          info="How do we communicate and where?"
          link="/contact"
        />
      </div>
    </section>
</template>


<script>
import TextSpeak from '../blog/text-speak.vue';
import Links from '../blog/Links.vue';
export default {
  name:'Boxservies',
  components:{
    TextSpeak,
    Links,
  }
}
</script>