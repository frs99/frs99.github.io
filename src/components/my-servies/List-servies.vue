<template>
  <section class="list-srv m-c">
    <div class="title">
      <h1>What can i</h1>
      <div>
    </div></div>

    <Lists 
      title="Website programming"
      info="I can convert web page design To real interaction on web and mobile browsers"
    />

    <Lists 
      title="Sites Design UX/UI"
      info="I can design interactive pages and take care of user interfaces And attention to the user experience."
    />

    <Lists 
      title="Logo Design"
      info="I can design visual identities and transform ideas To a digital design that reflects the identity of your activity."
    />
  </section>
</template>

<script>
import Lists from '../blog/Lists.vue';
export default {
  name:'Listservies',
  components:{
    Lists,
  },
}
</script>