let plan = {
    bulkStatusInterval: 30000,
    bulkStatusRetries: 18,
    clearDataFolder: true,
    clearRefFolder: true,
    steps: [
        {
            name: 'Account',
            sobjecttype: 'Account',
            externalid: 'Id',
            query: `SELECT * FROM Account LIMIT 10`
        }
    ]
}
module.exports = plan;
