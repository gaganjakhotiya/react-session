# AGENDA OF THE SESSION

1. Build a React Component
2. Re-write the component in TypeScript and form a build process
3. Coverfox codebase - A brief run
4. JavaScript good practices






# INIT COMMANDS
	npm init
	sudo npm install typescript webpack tsd -g
	npm install react react-dom --save
	npm install webpack-typescript typescript --save-dev
	tsd install react react-dom --save





# GOOD PRACTICES
## AVOID GLOBAL - USE IIEF
	var supposedlyPrivateStuff = "HIT"
	var publicStuff = function(){
		console.log(privateStuff)
	}
	publicStuff()

#### INSTEAD
	(function(){
	
		var publicStuff
		var actuallyPrivateStuff = "HIT"
		(publicStuff = function(){
			console.log(actuallyPrivateStuff)
		})()
	
		window['shitHappens'] = publicStuff
	
	})()






## Do more, code less
	function poop(a,b,c){
		if(a*b*c === c*a+b){
			return true;
		}else{
			return false;
		}
	}
	
	function poop2(a,b,c){
		var returnValue = 'defaultValue';
		if(a*b*c === c*a+b){
			returnValue = 'conditionalValue';
		}
		return returnValue;
	}

#### INSTEAD
	function unPoop(a,b,c){
		return a*b*c === c*a+b;
	}
	
	function unPoop2(a,b,c){
		return a*b*c === c*a+b ? 'conditionalValue' : 'defaultValue';
	}






## if-else - blahhh..
	if(typeof callback === 'function'){
		callback();
	}

#### INSTEAD - I got one line for you!
	typeof callback === 'function' && callback()






## Cache DOM elements, if using extensively
	function crazyOp(){
		$('#some .crazy:first-child .selector').some().crazy().operation()
	}
	for(var key in stuff){
		conditional && crazyOp()
	}

#### INSTEAD
	var node = $('#some .crazy:first-child .selector')
	function notSoCrazyOp(n){
		n.some().crazy().operation()
	}
	for(var key in stuff){
		conditional && notSoCrazyOp(node)
	}






## USE PURE FUNCTIONS
	var dont = "throwMeAround"
	
	var poop = function(){
		console.log(dont)
	}

#### INSTEAD
	var okok = "throwMeAround"
	
	var unPoop = function(val){
		console.log(val)
	}
	unPoop(okok)






## KNOW WHO IS "this"
	function construct(){
		// init some stuff
	}
	construct.prototype.someMethod = function(){
		// does some stuff using "this"
	}
	function someOtherMethod(callback){
		typeof callback === 'function' && callback()
	}
	
	var stuffy = new construct()
	someOtherMethod(stuffy.someMethod)

#### INSTEAD
	someOtherMethod(stuffy.someMethod.bind(this))
	// OR
	someOtherMethod(function(){
		stuffy.someMethod()
	})









## Callback doesn't need to be wrapped always
	function abc(){
		// does stuff
	}
	setTimeout(function(){
		abc()
	}, 100)

#### INSTEAD
	function abc(){
		// does stuff
	}
	setTimeout(abc, 100) // But, make sure you know 'this'.
