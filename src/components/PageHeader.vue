<template>
  <header class="header">
		<section class="header__top">
			<div class="wrapper wrapper--header">
				<img class="header__img" :src="require('@/assets/img/label.jpg')" alt="логотип">
				<div class="header__list">
					<router-link
					v-for="links in headerLinks"
					:key="links.id"
					:to="links.href"
					class="link link--top link--disappear"
					>{{links.link}}
					</router-link>
					<router-link to="#" class="link link--top link--phone"><font-awesome-icon class="header__icon" :icon="['fas', 'phone' ]"/></router-link>
					<router-link to="#" href="#" class="link link--button link--small link--disappear">Заказать доставку</router-link>
				</div>
				<button class="hamburger" type="menu"></button>
			</div>
		</section>
		<section class="header__container">
			<section class="wrapper wrapper--profits">
				<!-- <carousel class="profits__carousel"	
				:dots="false" :smartSpeed="900"	:loop="true" :autoplay="true"	:pullDrag="false"	:margin="10" :responsive="{0:{items:1.2,nav:false},992:{items:2,nav:true},1280:{items:1,nav:true}}">
				<div
				v-for="slide in headerCarousel"
				:key="slide.id"
				class="profits__wrap"
				:class="slide.class"
				>	<div class="profits__discription">
						<h2 class="profits__title">{{slide.firstRow}}<br>{{slide.secondRow}}<br>{{slide.thirdRow}}</h2>
						<p class="profits__text">{{slide.firstTextRow}}<br>{{slide.secondTextRow}}<br>{{slide.thirdTextRow}}</p>
						<div class="profits__link-wrap">
							<router-link to="slide.linkFirst" class="link" :class="slide.classFirstLink">{{slide.linkFirstText}}<img class="profits__img profits__img--soc" :src="slide.firstlinkImg"></router-link>
							<router-link to="slide.linkSecond" class="link link--violet">{{slide.linkSecondText}}<img class="profits__img profits__img--soc" :src="slide.secondtlinkImg"></router-link>
						</div>
					</div>
					<img class="profits__img" :class="slide.imgClass" :src="slide.img">
				</div>
				</carousel> -->
				<splide class="profits__carousel"	:loop="true" :autoplay="true" >
					<splide-slide
					v-for="slide in headerCarousel"
					:key="slide.id"
					class="profits__wrap"
					:class="slide.class"
					>	<div class="profits__discription">
							<h2 class="profits__title">{{slide.firstRow}}<br>{{slide.secondRow}}<br>{{slide.thirdRow}}</h2>
							<p class="profits__text">{{slide.firstTextRow}}<br>{{slide.secondTextRow}}<br>{{slide.thirdTextRow}}</p>
							<div class="profits__link-wrap">
								<router-link to="slide.linkFirst" class="link" :class="slide.classFirstLink">{{slide.linkFirstText}}<img class="profits__img profits__img--soc" :src="slide.firstlinkImg"></router-link>
								<router-link to="slide.linkSecond" class="link link--violet">{{slide.linkSecondText}}<img class="profits__img profits__img--soc" :src="slide.secondtlinkImg"></router-link>
							</div>
						</div>
						<img class="profits__img" :class="slide.imgClass" :src="slide.img">
					</splide-slide>
				</splide>
			</section>
			<section class="wrapper wrapper--shops">
				<router-link
				v-for="link in headerShops"
				:key="link.id"
				:to="link.href"
				class="shops__links"
				><img class="shops__img" :src="link.imgSrc">
				</router-link>
			</section>
		</section>
	</header>
</template>

<script>
// import carousel from 'vue-owl-carousel'

export default {
	props: ["headerLinks", "headerShops", "headerCarousel"],
	// props: ["headerLinks", "headerShops"],
	// components: { carousel },
}
</script>