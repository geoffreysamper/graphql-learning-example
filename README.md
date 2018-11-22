# intro
Check [spectrum](https://github.com/withspectrum/) for real usage of graphql
test project for explorer graphql

## queries

### query 1: get all articles

``` graphql
query {
  articles
  {
    title,
    section {
      name
    }
    tags{
      name
    }
  }
}
```

