import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
  host: string;
  database?: string;
}

getConnectionOptions().then(options => {
  const newOptions = options as IOptions;

  newOptions.host = 'db';

  newOptions.database =
    process.env.NODE_ENV === 'test' ? 'fin_app_test' : newOptions.database;

  console.log(options);

  createConnection({
    ...options,
  });
});
