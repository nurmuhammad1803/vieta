jQuery(document).ready(function ($) {
  $("#fullpage").fullpage({
    sectionsColor: ['#fff', '#e97d7d', '#ffecb6', '#c1c8fb', '#1B1C23']
  });
})
1
2
3
4
5
jQuery(document).ready(function ($) {
  $("#fullpage").fullpage({
    sectionsColor: ['#fff', '#fff', '#c1c8fb']
  });
})

// new typeit
new TypeIt("#simpleUsage", {
  strings: ["Have Any Project in Mind?",
    "Don’t Be Hesitate to Contact Us."
  ],
  speed: 50,
  waitUntilVisible: true,
}).go();