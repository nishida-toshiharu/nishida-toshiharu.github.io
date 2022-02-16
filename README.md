# nishida-toshiharu.github.io

```mermaid
sequenceDiagram
    ブラウザ->>+Controller: Httpリクエスト
    Controller->>+Service: ロジック層処理
    Service->>+Repository: クエリ発行
    Repository->>+DB: データベース操作
    DB->>-Repository: データベース結果
    Repository->>-Service: データ返却
    Service->>-Controller: コンバート処理
    Controller->>-ブラウザ: Htmlレンダリング
