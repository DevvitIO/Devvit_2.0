discordWidget.init({
  serverId: '364473157312315394',
  title: 'Devvit.io',
  join: false,
  alphabetical: true,
  theme: 'light',
  hideChannels: true,
  showAllUsers: true,
  allUsersDefaultState: false
});
discordWidget.render();


(function (window, document) {

  const cb1 = document.getElementById('cb1');
  const cb2 = document.getElementById('cb2');
  const about = document.querySelector('.getInvolved');

  const events = document.querySelectorAll('input[type=checkbox]');

  events.forEach(cb => cb.addEventListener('change', bothChecked));

  function bothChecked(e) {

    // Checks if both checkboxes checked attribute is true, if true, calls scrollPage
    if (cb1.checked & cb2.checked) scrollPage();

  }

  function scrollPage(e) {
    zenscroll.to(about, 800, emphasizeJoin()) //uses zenscroll to smooth scroll to the about section, has a -40px offset value to get everything on screen correctly 

  }

  function emphasizeJoin() {
    // function to be called after scrolling is complete that adds emphasis class to the join button
    setTimeout(function () {
      //Add emphasize function call here, to take effect after the scroll event completes
    }, 1000)
  }

})(window, document);





