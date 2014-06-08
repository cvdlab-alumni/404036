function startAnimation(spotLight, directionalLight, base, text2, joint1, joint2, height_base){

	//Animazioni luci
	var yesLight= new TWEEN.Tween(spotLight)
	.to({shadowDarkness: 0.5, intensity: 1},1)
	.delay(500);
	
	var noLight= new TWEEN.Tween(spotLight)
	.to({shadowDarkness: 0, intensity: 0},1);
	
	var darkAmbient = new TWEEN.Tween(directionalLight)
	.to({intensity: 0.15},2000);
	
	var lightAmbient = new TWEEN.Tween(directionalLight)
	.to({intensity: 0.8},1000)
	.delay(2000);

	//Resetta in ordine gli angoli e la posizione
	var backPosition = new TWEEN.Tween(base.position)
	.to({x: [+20, -40], y: [-15,0], z: [+50, height_base/2]}, 3000)
	.delay(500)
	.easing(TWEEN.Easing.Cubic.Out)
	.chain(yesLight,lightAmbient);
	
	var backAlfa = new TWEEN.Tween(joint1.rotation)
	.to({y: Math.PI*0.5732}, 2000)
	.delay(500)
	.easing(TWEEN.Easing.Back.InOut);
	
	var backBeta = new TWEEN.Tween(joint1.sphere.rotation)
	.to({x: Math.PI*0.1082}, 2000)
	.delay(500)
	.easing(TWEEN.Easing.Back.InOut);
	
	var backGamma = new TWEEN.Tween(joint1.hook.rotation)
	.to({x: Math.PI*0.200}, 2000)
	.delay(500)
	.easing(TWEEN.Easing.Back.InOut);
	
	var backDelta = new TWEEN.Tween(joint2.cylinder.rotation)
	.to({y: Math.PI*0}, 2000)
	.delay(500)
	.easing(TWEEN.Easing.Back.InOut);
	
	var backEpsilon = new TWEEN.Tween(joint2.hook.rotation)
	.to({x: Math.PI*0.3184}, 2000)
	.delay(500)
	.easing(TWEEN.Easing.Back.InOut);

	//Schiaccia la scritta e la sposta
	var textScale2 = new TWEEN.Tween(text2.scale)
	.to({x: 0.5, y: 0.5, z: 1}, 200)
	.easing(TWEEN.Easing.Linear.None)
	.chain(backPosition, backAlfa, backBeta, backGamma, backDelta, backEpsilon);
	
	var textPush1 = new TWEEN.Tween(text2.position)
	.to({x: 100, y: 10, z: 0}, 200)
	.easing(TWEEN.Easing.Linear.None);

	var lampSpring = new TWEEN.Tween(joint1.rotation)
	.to({y: Math.PI*0.6070}, 1000)
	.easing(TWEEN.Easing.Elastic.Out);
	
	//Scende dalla scritta e si allunga caricandosi
	var lampCharge = new TWEEN.Tween(joint1.rotation)
	.to({y: Math.PI*0.2566}, 1000)
	.easing(TWEEN.Easing.Exponential.Out)
	.chain(lampSpring,textScale2,textPush1);
	
	var lampStraight3 = new TWEEN.Tween(joint2.hook.rotation)
	.to({x: Math.PI*0}, 1000)
	.easing(TWEEN.Easing.Linear.None);

	var lampStraight2 = new TWEEN.Tween(joint1.hook.rotation)
	.to({x: Math.PI*0}, 1000)
	.easing(TWEEN.Easing.Linear.None);
	var lampStraight1 = new TWEEN.Tween(joint1.sphere.rotation)
	.to({x: Math.PI*0.4585}, 1000)
	.easing(TWEEN.Easing.Linear.None);

	var lampJump5 = new TWEEN.Tween(base.position)
	.to({ x: [+80, 50], y: [-35,-55], z: [45, height_base/2]},500)
	.interpolation( TWEEN.Interpolation.Bezier );
	
	//Salto sulla scritta schiacciandola
	var lampJump4 = new TWEEN.Tween(base.position)
	.to({x: 100, y: -25, z: (height_base/2)+12}, 500)
	.easing(TWEEN.Easing.Bounce.Out)
	.chain(lampJump5,lampStraight1, lampStraight2, lampStraight3, lampCharge);

	var textScale1 = new TWEEN.Tween(text2.scale)
	.to({x: 1, y: 0.5, z: 1}, 100)
	.delay(150)
	.easing(TWEEN.Easing.Linear.None);

	//Salto fino alla scritta
	var lampJump3 = new TWEEN.Tween(base.position)
	.to({x: 100, y: -25, z: (height_base/2)+80}, 1500)
	.easing(TWEEN.Easing.Bounce.In)
	.chain(lampJump4, textScale1)
	.delay(500);

	var lampJump2 = new TWEEN.Tween(base.position)
	.to({ x: [+80, 100], y: [-30,-25], z: [+70, 25]},500)
	.interpolation( TWEEN.Interpolation.Bezier )
	.chain(lampJump3)
	.delay(500);

	var lampJump1 = new TWEEN.Tween(base.position)
	.to({ x: [+20, 50], y: [-30,-30], z: [+70, height_base/2]}, 500)
	.interpolation( TWEEN.Interpolation.Bezier )
	.chain(lampJump2)
	.delay(500);

	//Osservoa Sinistra e Destra
	var lampObserverRight2 = new TWEEN.Tween(joint1.rotation)
	.to({y: Math.PI*0.4140}, 1500)
	.easing(TWEEN.Easing.Bounce.Out)
	.chain(lampJump1, noLight);

	var lampObserverRight = new TWEEN.Tween(joint1.rotation)
	.to({y: Math.PI*0.4140}, 1500)
	.easing(TWEEN.Easing.Linear.None)
	.repeat(1)
	.yoyo(true)
	.delay(500)
	.chain(lampObserverRight2);

	var lampObservLeft = new TWEEN.Tween(joint1.rotation)
	.to({y: Math.PI*0.6687}, 1500)
	.easing(TWEEN.Easing.Linear.None)
	.delay(1000)
	.chain(lampObserverRight);

	//Resetto le dimensioni e la posizione del testo
	var textReset2 = new TWEEN.Tween(text2.scale)
	.to({x: 1, y: 1, z: 1}, 2000)
	.easing(TWEEN.Easing.Linear.None)
	.chain(lampObservLeft, yesLight);

	var textReset1 = new TWEEN.Tween(text2.position)
	.to({x: 100, y: 0, z: 0}, 2000)
	.easing(TWEEN.Easing.Linear.None);

	var resetPosition = new TWEEN.Tween(base.position)
	.to({x: -40, y: 0, z: height_base/2}, 1000)
	.easing(TWEEN.Easing.Linear.None)
	.chain(backEpsilon,backDelta,backGamma,backBeta, backAlfa, textReset1, textReset2, noLight, darkAmbient)
	.start();
}