<template>
  <footer>
    <div id="footer-contain">
      <h2 class="foot_brand">Dr<span>e</span>amCl<span>o</span>ud</h2>
      <p>&#169; 2023</p>
      <p>
        "If at first you don't succeed, try, try again. Then quit. No use being
        a damn fool about it." ― W.C. Fields
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComp',
};
</script>

<!-- Always adding 'scoped' to point CSS to these contents specifically -->
<style scoped>
/* footer 'fixes' box to bottom of page;adds linear flare;extra padding for content */
footer {
  border-top: 2px solid black;
  width: 100%;
  background: linear-gradient(to left, white, gray);
}
#footer-contain {
  padding: 10px 0;
}

#footer-contain p {
  font-size: 10pt;
  text-align: center;
}
.foot_brand {
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 2px;
  color: black;
  border: 2px solid black;
  border-radius: 5px;
  box-shadow: 0px 2px 10px 1px;
  font-size: 16pt;
  font-weight: 600;
  margin: 1rem auto;
  padding: 1rem;
  max-width: 350px;
}
.foot_brand span {
  color: dodgerblue;
}
</style>
