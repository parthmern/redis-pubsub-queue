## advance backend comm
- https://projects.100xdevs.com/tracks/ABEC/ABEC-1
- https://youtu.be/IJkYipYNEtI?si=_rWAlBD-19xZzs09

## pubsub vs queue
- https://projects.100xdevs.com/tracks/Redis/Redis1

### queue
- queues , assume that i have two workers w1, w2 so they will consume the jobs ( each job one time )
- you can also autoscale your workers up and down ( if que length is 100 then i need to up 20 workers)
- you can also reduce the workers
<br/>

- another example video transcoding(single video convert to 144p, 240p, 360p, 480p) this is also one use case
- ex. Rabit mq, redis, sqs queueing in aws

### pub sub (publisher and subscriber)
- originally leetcode using long pooling like puting req on backend again and again
- good thing is use websockets
<br/>

- so what can happen after worker done their job
- worker's job is just complete the job or publish that job somewhere
- workers cannot connect to browser

<br/>
- when worker complete submission/job it can tell pub-sub 
- why do you need pub-sub? why cannot worker tell the websocket layer or http ?


### caching
- distributed caching by redis ( in memory storage means in ram)
<br/>

- why distributed caching ? ( nodejs server also save in global state or in hashmap)
- ![image](https://github.com/user-attachments/assets/153de5cb-9bcb-4a2a-9485-44eddbc60afa)

### redis is in memory db what if the redis server dies ?
- https://projects.100xdevs.com/tracks/Redis/Redis2
- AOF (Append Only File), snapshots 

### if caching working for 10 mins then what if after 2 min some db data changed?
- do that when admin do CREATE req on db that time make redis caching empty
- that's how u can get a new redis caches after new CREATE req by admin

- so first CLEAR DATA IN REDIS  then scondly PUT data in postgres
 
### SET/GET/DEL

- https://projects.100xdevs.com/tracks/Redis/Redis4

### Redis as a queue

- https://projects.100xdevs.com/tracks/Redis/Redis5
- L means from left side
- for queue : left push and right pop (LPUSH then RPOP)

- `BRPOP problems 0` here 0 means infinite it block queue until something push to the queue
- `BRPOP problems 30` here 30 means it block queue for 30sec



// pub sub is pending