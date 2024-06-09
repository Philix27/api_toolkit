mod commands;
mod postgres;
mod logs;
mod mongo;
mod mysql;
mod network;
mod webhook;

use commands::{connect_mongo, connect_mysql, create_portal, greet};
// use db_postgres::{connect_postgres, get_all_columns, get_rows, get_tables_in_db};
use tokio::runtime::Runtime;

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#[cfg_attr(not(debug_assertions), windows_subsystem = "windows")]
#[tokio::main]
async fn main() {
    let runtime = Runtime::new().unwrap();

    // runtime.block_on(async {
    // Your async code here
    // });

    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            greet,
            create_portal,
            connect_mysql,
            connect_mongo,
            postgres::get_all_columns,
            postgres::get_all_db,
            postgres::get_rows,
            postgres::run_query,
            postgres::get_tables_in_db,
            postgres::connect_postgres,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
