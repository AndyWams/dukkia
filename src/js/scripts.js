$(function () {
  $(document).ready(function () {
    $(".menu-trigger a, .sidenav .close_").click(function () {
      $(".sidenav").toggleClass("show");
      $(".sidenav .menu li ").toggleClass("animate__fadeInUp");
      $(".sidenav .actions").toggleClass("animate__fadeIn");
    });
  });
  //AOS Config
  $(function () {
    AOS.init({
      once: true,
      mirror: false,
    });
  });
});
