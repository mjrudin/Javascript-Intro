function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
};

Cat.prototype.cute_statement = function () {
  console.log("Everyone loves " + this.name + "!");
};

Cat.prototype.meow = function () {
  console.log("meow");
};

william = new Cat("William", "Jin");
william.cute_statement();

sid = new Cat("Sid", "Jin");
sid.cute_statement();
sid.meow();