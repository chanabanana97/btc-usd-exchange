var Airtable = require('airtable');
require('dotenv').config();
const airtable_ACCESS_KEY = process.env.airtable_ACCESS_KEY
const base_id = "appNx9KdZEi4Bbgc1"
const table = "BTC Table"


async function add_to_table(records){
  /**
   * records - list of jsons, each json is a record to add to table
   * function returns true if records were added to table successfully, otherwise returns false
   */
  try{
    let base = new Airtable({apiKey: airtable_ACCESS_KEY}).base(base_id);
    await base(table).create(records);
  }
  catch(error){
    return false;
  }
    return true;
}

exports.add_to_table = add_to_table;