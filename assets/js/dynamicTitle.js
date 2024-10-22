window.onload = function () {
  const favicon = document.getElementById('favicon')
  const pageTitle = document.title
  const attentionMessage = 'Aman Jain'

  document.addEventListener('visibilitychange', function (e) {
    const isPageActive = !document.hidden
    toggle(isPageActive)
  })

  function toggle(isPageActive) {
    if (isPageActive) {
      document.title = pageTitle
      favicon.href = './assets/images/favicon-aman.png'
    } else {
      document.title = attentionMessage
      favicon.href = './assets/images/favicon-aman.png'
    }
  }
}
