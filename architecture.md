graph TD
    A[User] --> B[React Frontend]
    B --> C[Express Backend]
    C --> D[MongoDB]
    C --> E[Gemini API]
    
    B --> F[Login/Register Pages]
    B --> G[Chat Interface]
    C --> H[Auth Routes]
    C --> I[Chat Routes]
    C --> J[User Model]
    
    style A fill:#4f6d7a,stroke:#333,stroke-width:2px,color:#fff
    style B fill:#eaeff1,stroke:#333,stroke-width:2px,color:#000
    style C fill:#5d8a9d,stroke:#333,stroke-width:2px,color:#fff
    style D fill:#6c757d,stroke:#333,stroke-width:2px,color:#fff
    style E fill:#8e44ad,stroke:#333,stroke-width:2px,color:#fff
    
    style F fill:#3498db,stroke:#333,stroke-width:1px,color:#fff
    style G fill:#3498db,stroke:#333,stroke-width:1px,color:#fff
    style H fill:#2ecc71,stroke:#333,stroke-width:1px,color:#fff
    style I fill:#2ecc71,stroke:#333,stroke-width:1px,color:#fff
    style J fill:#f39c12,stroke:#333,stroke-width:1px,color:#fff