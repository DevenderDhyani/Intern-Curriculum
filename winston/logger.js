//using winston we can log in report of request in file, Console, Http endpoint and Database as well

import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  //format of log that will be stored in a file
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  //where to store the logs
  transports: [
    // creating a new file and storin the log that we have
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.printf(({ timestamp, level, message }) => {
            return `${timestamp} [${level}]: ${message}`;
          })
        )
      })
  ],
});



logger.info("This is information..");
logger.warn("This is your warning!!");
logger.error("This is an error????");

export default logger;

