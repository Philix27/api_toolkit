use tokio_postgres::{Error, NoTls};

trait IPostgres {
    async fn connect(host: &str, user_name: &str, password: &str) -> Result<(), Error>;
}
pub struct AppPostgres;

impl IPostgres for AppPostgres {
    async fn connect(host: &str, user_name: &str, password: &str) -> Result<(), Error> {
        // Connect to the database.
        let (client, connection) =
            tokio_postgres::connect("host=localhost user=postgres", NoTls).await?;
        // The connection object performs the actual communication with the database,
        // so spawn it off to run on its own.
        tokio::spawn(async move {
            if let Err(e) = connection.await {
                eprintln!("connection error: {}", e);
            }
        });

        // Now we can execute a simple statement that just returns its parameter.
        let rows = client.query("SELECT $1::TEXT", &[&"hello world"]).await?;

        // And then check that we got back the same string we sent over.
        let value: &str = rows[0].get(0);
        assert_eq!(value, "hello world");

        Ok(())
    }
}

#[tokio::main]
pub async fn connect(host: &str, user_name: &str, password: &str) -> Result<(), Error> {
    // Connect to the database.
    let (client, connection) =
        tokio_postgres::connect("host=localhost user=postgres", NoTls).await?;
    // The connection object performs the actual communication with the database,
    // so spawn it off to run on its own.
    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("connection error: {}", e);
        }
    });

    // Now we can execute a simple statement that just returns its parameter.
    let rows = client.query("SELECT $1::TEXT", &[&"hello world"]).await?;

    // And then check that we got back the same string we sent over.
    let value: &str = rows[0].get(0);
    assert_eq!(value, "hello world");

    Ok(())
}
