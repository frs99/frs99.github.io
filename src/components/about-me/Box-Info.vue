<template>
  <section class="box-about m-c">
      <!-- ADD MESSAGE -->
      <TextSpeak
        title="About me"
        message = "Hello, my name is Fares from Algeria and I am 22 years old.
                  I am a web developer, and I also enjoy designing interfaces and logos and learning everything.
                  I also push open source projects that help everyone.
                  I started learning programming from the phone and I do not own a computer
                  the programming for me is a love , and not just a job.
                  Today I am good at many thing 😎."/>
      <TextSpeak
        title="Skills"
        message = "I used to love to use the computer since my childhood, but unfortunately I did not have the money to buy a device.
                    I loved programming and design, but I couldn't do anything, However.
                    I slowly started learning programming by phone only.
                    until I bought a computer and started doing the thing I love.
                    I am currently a good programmer and designer and I also use Linux as my device system

                    These are some of the things I'm good at:"
      />

      <!-- ADD SKILLES -->
      <AllSkilles />

      <!-- ADD THANKS -->
      <Thanks />
    </section>
</template>

<script>
import TextSpeak from '../blog/text-speak.vue';
import AllSkilles from './All-Skilles.vue';
import Thanks from '../Thanks.vue';
export default {
  name:'BoxInfo',
  components:{
    TextSpeak,
    AllSkilles,
    Thanks
  },
}
</script>