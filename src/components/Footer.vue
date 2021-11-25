<template>
    <footer class="text-center text-white">
        <!-- Grid container -->
        <div class="container">
            <!-- Section: Social media -->
            <section class="mb-4">
            <!-- Facebook -->
            <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #3b5998;"
                href="#!"
                role="button"
                ><i class="fab fa-facebook-f"></i
            ></a>

            <!-- Twitter -->
            <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #55acee;"
                href="#!"
                role="button"
                ><i class="fab fa-twitter"></i
            ></a>

            <!-- Google -->
            <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #dd4b39;"
                href="#!"
                role="button"
                ><i class="fab fa-google"></i
            ></a>

            <!-- Instagram -->
            <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #ac2bac;"
                href="#!"
                role="button"
                ><i class="fab fa-instagram"></i
            ></a>

            <!-- Linkedin -->
            <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #0082ca;"
                href="#!"
                role="button"
                ><i class="fab fa-linkedin-in"></i
            ></a>
            <!-- Github -->
            <a
                class="btn btn-primary btn-floating m-1"
                style="background-color: #333333;"
                href="#!"
                role="button"
                ><i class="fab fa-github"></i
            ></a>
            </section>
            <!-- Section: Social media -->
        </div>
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © {{ reversedYear }} Copyright:
            <a class="text-white" href="https://mdbootstrap.com/">Ryu-ki Production. All rights reserved.</a>
        </div>
        <!-- Copyright -->
    </footer>
</template>

<script>
export default {
  computed: {
    reversedYear: function () {
        let today = new Date();
        let year = today.getFullYear();
        return year
    }
  }
}
</script>

<style>
footer {
    background-color: #3B4552;
    color: #ffffff;

}
footer p {
    margin: 0;
}
.btn-primary  {
    border-color: #3B4552;
}
footer .container {
    margin: 0 auto;
    padding: 80px 0 70px;
}
</style>