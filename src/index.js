var cron = require('node-cron');

const airtable = require('./table')
const coinlayer = require('./coinlayer')
let records = []

function create_record(rate){
    return {
        "fields": {
          "Time": new Date(),
          "Rates": rate
        }
      }
}

async function main(){
    try{
      let rate = await coinlayer.get_rate();
      let record = create_record(rate);
      records.push(record)
      let added = await airtable.add_to_table(records);
      // if record was added successfully we clear records, otherwise we save them in array to add later
      if (added){ 
          records = []
      }
    }
    catch(error){
        console.log(error)
    }
        
    }
  
 cron.schedule('* * * * *', () => {
  // schedule code to run every minute
    main();
  });

