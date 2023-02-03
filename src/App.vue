<template>
	<div class="container">
		<div class="card card-navbar card-sm mb-3">
			<div class="card-body row">
				<div class="col-2"><i class='bx bx-menu'></i></div>
				<div class="col-8 text-center">ACCOUNTS</div>
				<div class="col-2" style="text-align: right;"><i class='bx bxs-user-account'></i></div>
			</div>
		</div>
		<router-view/>
	</div>
</template>
<script>
import "@/assets/js/tabler.min.js"
export default {

}
</script>

<style>
@import url('@/assets/css/tabler.min.css');
@import url('@/assets/css/normalize.css');
@import url('@/assets/css/skeleton.css');
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
#app {
  font-family: "Raleway", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
}

.container {
	max-width: 430px !important;
	background: #EAEAEA;
	height: 100vh;
}

.container .card-navbar {
	background: #EAEAEA !important;
	-webkit-box-shadow: none;
	-moz-box-shadow: none;
	box-shadow: none;
	border: 0;
}

.container .card-navbar i {
	font-size: 1rem;
	color: rgb(87, 87, 87);
}

</style>
