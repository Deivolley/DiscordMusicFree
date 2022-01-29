let { ShardingManager } = require("discord.js");
let shards = new ShardingManager("./index.js", {
  token: require('./botconfig/config.json').token,
  totalShards: 1,
  respawn: true
});

shards.on("shardCreate", shard => {
	console.log('Shard '+shard.id+" Lunched")
});

shards.spawn(shards.totalShards);