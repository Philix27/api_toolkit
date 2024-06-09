#[tauri::command]
pub fn connect_postgres(host: &str, user_name: &str, password: &str) -> String {
    super::connect(host, user_name, password);
    format!("Hello pope, {}!", user_name)
}

#[tauri::command]
pub fn get_all_db(host: &str, user_name: &str, password: &str) -> String {
    super::connect(host, user_name, password);
    format!("Hello pope, {}!", user_name)
}

#[tauri::command]
pub fn get_tables_in_db(host: &str, user_name: &str, password: &str) -> String {
    super::connect(host, user_name, password);
    format!("Hello pope, {}!", user_name)
}

#[tauri::command]
pub fn get_all_columns(host: &str, user_name: &str, password: &str) -> String {
    super::connect(host, user_name, password);
    format!("Hello pope, {}!", user_name)
}
#[tauri::command]
pub fn get_rows(host: &str, user_name: &str, password: &str) -> String {
    super::connect(host, user_name, password);
    format!("Hello pope, {}!", user_name)
}

#[tauri::command]
pub fn run_query(host: &str, user_name: &str, password: &str) -> String {
    super::connect(host, user_name, password);
    format!("Hello pope, {}!", user_name)
}
