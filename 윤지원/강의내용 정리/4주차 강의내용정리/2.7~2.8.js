const player = {
  name: "geenie",
  sayHello: function (otherpersonsname) {
    console.log("hello! " + otherpersonsname + " nice to meet you");
  },
}; // 함수 안에 함수 정의
console.log(player.name);
player.sayHello("lynn");
player.sayHello("지원이");
