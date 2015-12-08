package dao;

import model.redisUserStoreTest;

import org.springframework.data.redis.core.RedisTemplate;

public class userService {
	RedisTemplate<String, redisUserStoreTest> redisTemplate;

	public userService() {

	}

	public void setRedisTemplate(
			RedisTemplate<String, redisUserStoreTest> redisTemplate) {
		this.redisTemplate = redisTemplate;
	}

	public void put(redisUserStoreTest user) {
		redisTemplate.opsForHash()
				.put(user.getObjectKey(), user.getKey(), user);
	}

	public void delete(redisUserStoreTest key) {
		redisTemplate.opsForHash().delete(key.getObjectKey(), key.getKey());
	}

	public redisUserStoreTest get(redisUserStoreTest key) {
		return (redisUserStoreTest) redisTemplate.opsForHash().get(
				key.getObjectKey(), key.getKey());
	}
}
