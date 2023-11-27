const { searchUser } = require('../dbConfig.js');

describe('searchUser', () => {
  it('should return -1 when email is empty', async () => {
    const result = await searchUser('', {});
    expect(result).toBe(-1);
  });

  it('should return -1 when user is not found', async () => {
    const db = {
      all: jest.fn((query, params, callback) => callback(null, [])),
    };

    const result = await searchUser('notfound@example.com', db);
    expect(result).toBe(-1);
  });

  it('should return user id when user is found', async () => {
    const db = {
      all: jest.fn((query, params, callback) => callback(null, [{ id: 123 }])),
    };

    const result = await searchUser('found@example.com', db);
    expect(result).toBe(123);
  });
});