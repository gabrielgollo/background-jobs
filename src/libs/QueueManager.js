const Queue = require("bull");
const redisConfig = require("../config/redis");

const jobs = require("../jobs/");
class QueueManager {
  constructor() {
    this.queues = Object.values(jobs).map((job) => {
      const { key, options: redisOptions } = job.configure();
      const queue = new Queue(key, redisConfig);
      const { handle } = job;

      return {
        bull: queue,
        name: key,
        handle: handle,
        options: redisOptions,
      };
    });
  }

  async add(jobName, data) {
    const queue = this.queues.find((queue) => queue.name === jobName);
    if (!queue) {
      throw new Error("Queue not found");
    }
    queue.bull.add(data, queue.options);
    return queue;
  }

  async processQueue() {
    this.queues.forEach((queue) => {
      console.log("Processing queue ->", queue.name);
      queue.bull.process(queue.handle);

      queue.bull.on("failed", (job, error) => {
        console.log(`Queue ${queue.name} FAILED`, job.data, error);
      });
    });
  }
}

module.exports = new QueueManager();
