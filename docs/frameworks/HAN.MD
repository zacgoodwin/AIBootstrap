# Han skills

All [TheBushidoCollective/han](https://github.com/TheBushidoCollective/han) skills, sorted by the same sections as the other files in docs/frameworks/. Upstream 29a19d3 (2026-08-19) checked 2026-08-23.

Han is a marketplace of 161 plugins across 11 categories (core, bushido, disciplines, frameworks, languages, patterns, services, specialized, tools, validation, bridges). Skill names repeat across plugins (e.g. jira/linear/clickup each ship `create`, `complete`, `validate`), so every row prefixes the owning plugin. 419 skills, 72 agents, 100 hook-bearing plugins.

# Development Process

## Loop
| Execution | What it does |
| --- | --- |
| `/develop` | core: Guides end-to-end feature development through 8 phases: discover requirements |
| `/plan` | core: Create tactical implementation plan for a feature or task |

## Designer Implementation
| Execution | What it does |
| --- | --- |
| `/atomic-design-atoms` | atomic-design: Use when creating atomic-level UI components like buttons, inputs, labels, and icons. The smallest building blocks of a design system. |
| `/atomic-design-fundamentals` | atomic-design: Use when applying Atomic Design methodology to organize UI components into quarks, atoms, molecules, organisms, templates, and pages. Core principles and hierarchy. |
| `/atomic-design-integration` | atomic-design: Use when integrating Atomic Design methodology with React, Vue, Angular, or other frameworks. Framework-specific implementation patterns. |
| `/atomic-design-molecules` | atomic-design: Use when composing atoms into molecule components like form fields, search bars, and card headers. Molecules are functional groups of atoms. |
| `/atomic-design-organisms` | atomic-design: Use when building complex organisms from molecules and atoms like headers, footers, product cards, and sidebars. Organisms are distinct UI sections. |
| `/atomic-design-quarks` | atomic-design: Use when working with design tokens, CSS custom properties, and primitive values that form the foundation below atoms. Quarks are the sub-atomic building blocks. |
| `/atomic-design-templates` | atomic-design: Use when creating page layouts without real content. Templates define the skeletal structure of pages using organisms, molecules, and atoms. |
| `/figma-analyze-frame` | figma: Analyze a Figma frame's structure, properties, and implementation considerations |
| `/figma-extract-tokens` | figma: Extract design tokens and variables from a Figma file to create or update a design system |
| `/figma-generate-component` | figma: Generate production-ready code from a Figma component or frame using the Figma MCP server |
| `/figma-sync-design-system` | figma: Sync design system components between Figma and code using Code Connect mappings |
| `/storybook-args-controls` | storybook: Use when configuring interactive controls and args for Storybook stories. Helps create dynamic, explorable component demonstrations with proper type constraints. |
| `/storybook-component-documentation` | storybook: Use when creating or improving component documentation in Storybook. Helps generate comprehensive docs using MDX, autodocs, and JSDoc comments. |
| `/storybook-configuration` | storybook: Use when setting up or configuring Storybook for a project. Covers main configuration, addons, builders, and framework-specific setup. |
| `/storybook-play-functions` | storybook: Use when adding interaction testing to Storybook stories. Enables automated testing of component behavior, user interactions, and state changes directly in stories. |
| `/storybook-story-writing` | storybook: Use when creating or modifying Storybook stories for components. Ensures stories follow CSF3 format, properly showcase component variations, and build successfully. |

## Technical Stack Specific
| Execution | What it does |
| --- | --- |
| `/angular-dependency-injection` | angular: Use when building modular Angular applications requiring dependency injection with providers, injectors, and services. |
| `/angular-rxjs-patterns` | angular: Use when handling async operations in Angular applications with observables, operators, and subjects. |
| `/angular-signals` | angular: Use when building Angular 16+ applications requiring fine-grained reactive state management and zone-less change detection. |
| `/django-cbv-patterns` | django: Use when Django Class-Based Views for building modular, reusable views. Use when creating CRUD operations and complex view logic. |
| `/django-orm-patterns` | django: Use when Django ORM patterns with models, queries, and relationships. Use when building database-driven Django applications. |
| `/django-rest-framework` | django: Use when Django REST Framework for building APIs with serializers, viewsets, and authentication. Use when creating RESTful APIs. |
| `/ecto-changesets` | ecto: Use when validating and casting data with Ecto changesets including field validation, constraints, nested changesets, and data transformation. Use for ensuring data integrity befor |
| `/ecto-query-patterns` | ecto: Use when querying data with Ecto.Query DSL including where clauses, joins, aggregates, preloading, and query composition. Use for building flexible database queries in Elixir appli |
| `/ecto-schema-patterns` | ecto: Use when defining data structures using Ecto schemas including fields, associations, embedded schemas, and schema metadata. Use for modeling domain data in Elixir applications. |
| `/ecto-schemas` | ecto: Use when defining and working with Ecto schemas including field types, associations, and embedded schemas. Use when modeling database entities in Elixir. |
| `/effect-concurrency` | effect: Use when Effect concurrency patterns including fibers, fork, join, parallel execution, and race conditions. Use for concurrent operations in Effect applications. |
| `/effect-core-patterns` | effect: Use when Effect core patterns including Effect<A, E, R> type, succeed, fail, sync, promise, and Effect.gen for composing effects. Use for basic Effect operations. |
| `/effect-dependency-injection` | effect: Use when Effect dependency injection patterns including Context, Layer, service definitions, and dependency composition. Use for managing dependencies in Effect applications. |
| `/effect-error-handling` | effect: Use when Effect error handling patterns including catchAll, catchTag, either, option, and typed errors. Use for handling expected errors in Effect applications. |
| `/effect-resource-management` | effect: Use when Effect resource management patterns including Scope, addFinalizer, scoped effects, and automatic cleanup. Use for managing resources in Effect applications. |
| `/effect-schema` | effect: Use when @effect/schema patterns including schema definition, validation, parsing, encoding, and transformations. Use for type-safe data validation in Effect applications. |
| `/effect-testing` | effect: Use when testing Effect code including Effect.gen in tests, test layers, mocking services, and testing error scenarios. Use for writing tests for Effect applications. |
| `/expo-build` | expo: Use when building and deploying Expo apps with EAS Build. Covers build configuration, development builds, production builds, and app store submission. |
| `/expo-config` | expo: Use when configuring Expo apps with app.json, app.config.js, and EAS configuration. Covers app metadata, plugins, build configuration, and environment variables. |
| `/expo-modules` | expo: Use when working with Expo SDK modules for camera, location, notifications, file system, and other device APIs. Covers permissions, configurations, and best practices. |
| `/expo-router` | expo: Use when implementing file-based routing in Expo with Expo Router. Covers app directory structure, navigation, layouts, dynamic routes, and deep linking. |
| `/expo-updates` | expo: Use when implementing over-the-air (OTA) updates with Expo Updates. Covers update configuration, checking for updates, and update strategies. |
| `/fastapi-async-patterns` | fastapi: Use when FastAPI async patterns for building high-performance APIs. Use when handling concurrent requests and async operations. |
| `/fastapi-dependency-injection` | fastapi: Master FastAPI dependency injection for building modular, testable APIs. |
| `/fastapi-validation` | fastapi: Use when FastAPI validation with Pydantic models. Use when building type-safe APIs with robust request/response validation. |
| `/gluestack-accessibility` | gluestack: Use when ensuring accessible gluestack-ui implementations. Covers WAI-ARIA patterns, screen reader support, keyboard navigation, focus management, and WCAG 2.1 AA compliance. |
| `/gluestack-components` | gluestack: Use when building UI with gluestack-ui components. Covers component composition, variants, sizes, states, accessibility props, and platform-specific considerations for React and Re |
| `/gluestack-mcp-tools` | gluestack: Use when discovering, exploring, or retrieving gluestack-ui components via MCP tools. Provides access to component source code, variants, demos, and metadata. |
| `/gluestack-theming` | gluestack: Use when customizing gluestack-ui themes and design tokens. Covers theme provider setup, design tokens, dark mode, NativeWind integration, and extending themes. |
| `/ink-component-patterns` | ink: Use when building terminal UIs with Ink component patterns for React-based CLI applications. |
| `/ink-hooks-state` | ink: Use when managing state and side effects in Ink applications using React hooks for terminal UIs. |
| `/ink-layout-styling` | ink: Use when creating terminal layouts with Ink using Flexbox-based positioning and styling for CLI applications. |
| `/nestjs-dependency-injection` | nestjs: Use when nestJS dependency injection with providers, modules, and decorators. Use when building modular NestJS applications. |
| `/nestjs-guards-interceptors` | nestjs: Use when nestJS guards and interceptors for auth, logging, and transformation. Use when implementing cross-cutting concerns. |
| `/nestjs-testing` | nestjs: Use when nestJS testing with unit tests, integration tests, and e2e tests. Use when building well-tested NestJS applications. |
| `/nextjs-app-router` | nextjs: Use when next.js App Router with layouts, loading states, and streaming. Use when building modern Next.js 13+ applications. |
| `/nextjs-data-fetching` | nextjs: Use when next.js data fetching patterns including SSG, SSR, and ISR. Use when building data-driven Next.js applications. |
| `/nextjs-server-components` | nextjs: Use when next.js Server Components for optimal performance. Use when building data-intensive Next.js applications. |
| `/phoenix-controllers` | phoenix: Handle HTTP requests with Phoenix controllers including actions, parameters, rendering, flash messages, and redirects |
| `/phoenix-patterns` | phoenix: Use when applying Phoenix Framework best practices including context design, controller patterns, and application architecture. Use when building Phoenix applications. |
| `/phoenix-routing` | phoenix: Define routes and URL helpers in Phoenix applications including resources, scopes, pipelines, and verified routes |
| `/phoenix-views-templates` | phoenix: Render views and templates in Phoenix using HEEx templates, function components, slots, and assigns |
| `/rails-action-controller-patterns` | rails: Use when action Controller patterns including routing, filters, strong parameters, and REST conventions. |
| `/rails-active-record-patterns` | rails: Use when active Record patterns including models, associations, queries, validations, and callbacks. |
| `/rails-hotwire` | rails: Use when hotwire (Turbo and Stimulus) for building modern reactive Rails applications without complex JavaScript frameworks. |
| `/react-native-web-core` | react-native-web: Use when working with React Native Web projects. Provides core concepts, components, and cross-platform patterns for building web applications with React Native. |
| `/react-native-web-navigation` | react-native-web: Use when implementing navigation in React Native Web projects. Provides patterns for React Navigation, deep linking, and web-specific routing. |
| `/react-native-web-performance` | react-native-web: Use when optimizing React Native Web performance. Provides patterns for code splitting, bundle optimization, memoization, and web-specific performance improvements. |
| `/react-native-web-styling` | react-native-web: Use when styling React Native Web components. Provides patterns for StyleSheet API, platform-specific styles, responsive design, and theming. |
| `/react-native-web-testing` | react-native-web: Use when testing React Native Web applications. Provides patterns for Jest, React Native Testing Library, component testing, and web-specific testing strategies. |
| `/react-native-components` | react-native: Use when building React Native UI components with core components, custom components, and component patterns. Covers View, Text, Image, ScrollView, FlatList, and component composit |
| `/react-native-native-modules` | react-native: Use when building or integrating native modules in React Native. Covers creating native modules, Turbo Modules, bridging native code, and accessing platform-specific APIs. |
| `/react-native-navigation` | react-native: Use when implementing navigation in React Native apps with React Navigation. Covers stack, tab, drawer navigation, deep linking, and navigation patterns. |
| `/react-native-performance` | react-native: Use when optimizing React Native app performance. Covers FlatList optimization, memoization, image optimization, bundle size reduction, and profiling techniques. |
| `/react-native-platform` | react-native: Use when handling platform-specific code in React Native for iOS and Android. Covers Platform API, platform-specific components, native modules, and cross-platform best practices. |
| `/react-native-styling` | react-native: Use when styling React Native components with StyleSheet, Flexbox layout, responsive design, and theming. Covers platform-specific styling and design systems. |
| `/react-context-patterns` | react: Use when React Context patterns for state management. Use when sharing state across component trees without prop drilling. |
| `/react-hooks-patterns` | react: Use when React Hooks patterns including useState, useEffect, useContext, useMemo, useCallback, and custom hooks. Use for modern React development. |
| `/react-performance` | react: Use when React performance optimization including memoization, lazy loading, and virtualization. Use when optimizing React applications. |
| `/reactflow-custom-nodes` | reactflow: Use when creating custom React Flow nodes, edges, and handles. Covers custom node components, resizable nodes, toolbars, and advanced customization. |
| `/reactflow-fundamentals` | reactflow: Use when building node-based UIs, flow diagrams, workflow editors, or interactive graphs with React Flow. Covers setup, nodes, edges, controls, and interactivity. |
| `/relay-fragments-patterns` | relay: Use when relay fragment composition, data masking, colocation, and container patterns for React applications. |
| `/relay-mutations-patterns` | relay: Use when relay mutations with optimistic updates, connections, declarative mutations, and error handling. |
| `/relay-pagination` | relay: Use when relay pagination with cursor-based pagination, infinite scroll, load more patterns, and connection protocols. |
| `/svelteflow-custom-nodes` | svelteflow: Use when creating custom Svelte Flow nodes, edges, and handles. Covers custom node components, resizable nodes, toolbars, and advanced customization. |
| `/svelteflow-fundamentals` | svelteflow: Use when building node-based UIs, flow diagrams, workflow editors, or interactive graphs with Svelte Flow. Covers setup, nodes, edges, controls, and interactivity. |
| `/vue-component-patterns` | vue: Use when Vue component patterns including props, emits, slots, and provide/inject. Use when building reusable Vue components. |
| `/vue-composition-api` | vue: Use when Vue 3 Composition API with reactive refs, computed, and composables. Use when building modern Vue 3 applications. |
| `/vue-reactivity-system` | vue: Use when Vue reactivity system with refs, reactive, computed, and watchers. Use when managing complex state in Vue applications. |
| `/zustand-advanced-patterns` | zustand: Use when implementing advanced Zustand patterns including transient updates, subscriptions with selectors, store composition, and performance optimization techniques. |
| `/zustand-middleware` | zustand: Use when implementing Zustand middleware for persistence, dev tools, immutability, and other enhanced store functionality. Covers persist, devtools, immer, and custom middleware. |
| `/zustand-store-patterns` | zustand: Use when creating and managing Zustand stores for React state management. Covers store creation, selectors, actions, and basic usage patterns. |
| `/zustand-typescript` | zustand: Use when working with Zustand in TypeScript projects. Covers type-safe store creation, typed selectors, and advanced TypeScript patterns with Zustand. |
| `/c-data-structures` | c: Use when implementing data structures in C including arrays, linked lists, trees, and hash tables with manual memory management. |
| `/c-memory-management` | c: Use when managing memory in C programs with malloc/free, pointers, and avoiding common memory safety pitfalls. |
| `/c-systems-programming` | c: Use when writing low-level system software in C requiring file I/O, process management, signals, and system calls. |
| `/cpp-modern-features` | cpp: Use when working with modern C++ codebases requiring features from C++11 to C++23 including lambdas, move semantics, ranges, and concepts. |
| `/cpp-smart-pointers` | cpp: Use when managing memory safely in C++ with smart pointers including unique_ptr, shared_ptr, weak_ptr, and RAII patterns. |
| `/cpp-templates-metaprogramming` | cpp: Use when creating generic and type-safe C++ libraries with templates, SFINAE, concepts, and compile-time metaprogramming. |
| `/crystal-concurrency` | crystal: Use when implementing concurrent programming in Crystal using fibers, channels, and parallel execution patterns for high-performance, non-blocking applications. |
| `/crystal-engineer` | crystal: Use when working with Crystal language development including WebSocket communication, TLS/SSL configuration, HTTP frameworks, ORM operations, and high-performance concurrent system |
| `/crystal-macros` | crystal: Use when implementing compile-time metaprogramming in Crystal using macros for code generation, DSLs, compile-time computation, and abstract syntax tree manipulation. |
| `/csharp-async-patterns` | csharp: Use when C# async/await patterns including Task, ValueTask, async streams, and cancellation. Use when writing asynchronous C# code. |
| `/csharp-linq` | csharp: Use when lINQ query and method syntax, deferred execution, and performance optimization. Use when querying collections in C#. |
| `/csharp-nullable-types` | csharp: Use when C# nullable reference types, null safety patterns, and migration strategies. Use when ensuring null safety in C# code. |
| `/elixir-ecto-patterns` | elixir: Use when Elixir Ecto patterns including schemas, changesets, queries, and transactions. Use when building database-driven Elixir applications. |
| `/elixir-otp-patterns` | elixir: Use when Elixir OTP patterns including GenServer, Supervisor, Agent, and Task. Use when building concurrent, fault-tolerant Elixir applications. |
| `/elixir-pattern-matching` | elixir: Use when Elixir pattern matching including function clauses, case statements, with statements, and destructuring. Use for elegant control flow. |
| `/erlang-concurrency` | erlang: Use when erlang's concurrency model including lightweight processes, message passing, process links and monitors, error handling patterns, selective receive, and building massively |
| `/erlang-distribution` | erlang: Use when erlang distributed systems including node connectivity, distributed processes, global name registration, distributed supervision, network partitions, and building fault-to |
| `/erlang-otp-behaviors` | erlang: Use when oTP behaviors including gen_server for stateful processes, gen_statem for state machines, supervisors for fault tolerance, gen_event for event handling, and building robus |
| `/gleam-actor-model` | gleam: Use when oTP actor patterns in Gleam including processes, message passing, GenServer implementations, supervisors, fault tolerance, state management, and building concurrent, fault |
| `/gleam-interop` | gleam: Use when gleam-Erlang interoperability including calling Erlang code from Gleam, using Erlang libraries, external functions, working with Erlang types, NIFs, and leveraging the BEA |
| `/gleam-type-system` | gleam: Use when gleam's type system including algebraic data types, custom types, pattern matching, generic types, type inference, opaque types, exhaustive checking, and functional error  |
| `/go-concurrency` | go: Use when Go concurrency with goroutines, channels, and sync patterns. Use when writing concurrent Go code. |
| `/go-error-handling` | go: Use when Go error handling with error wrapping, sentinel errors, and custom error types. Use when handling errors in Go applications. |
| `/go-interfaces` | go: Use when Go interfaces including interface design, duck typing, and composition patterns. Use when designing Go APIs and abstractions. |
| `/java-concurrency` | java: Use when Java concurrency with ExecutorService, CompletableFuture, and virtual threads. Use when building concurrent applications. |
| `/java-generics` | java: Use when Java generics including type parameters, wildcards, and type bounds. Use when writing type-safe reusable code. |
| `/java-streams-api` | java: Use when Java Streams API for functional-style data processing. Use when processing collections with streams. |
| `/kotlin-coroutines` | kotlin: Use when kotlin coroutines for structured concurrency including suspend functions, coroutine builders, Flow, channels, and patterns for building efficient asynchronous code with ca |
| `/kotlin-dsl-patterns` | kotlin: Use when domain-specific language design in Kotlin using type-safe builders, infix functions, operator overloading, lambdas with receivers, and patterns for creating expressive, re |
| `/kotlin-null-safety` | kotlin: Use when kotlin's null safety system including nullable types, safe calls, Elvis operator, smart casts, and patterns for eliminating NullPointerExceptions while maintaining code ex |
| `/lua-c-integration` | lua: Use when lua C API for extending Lua with native code including stack operations, calling C from Lua, calling Lua from C, creating C modules, userdata types, metatables in C, and p |
| `/lua-coroutines` | lua: Use when lua coroutines for cooperative multitasking including coroutine creation, yielding and resuming, passing values, generators, iterators, asynchronous patterns, state machin |
| `/lua-tables-patterns` | lua: Use when lua tables as the universal data structure including arrays, dictionaries, objects, metatables, object-oriented patterns, data structures, and advanced table manipulation  |
| `/nim-c-interop` | nim: Use when nim-C interoperability including calling C from Nim, wrapping C libraries, importc/exportc pragmas, header generation, FFI patterns, and building high-performance systems  |
| `/nim-memory-management` | nim: Use when nim's memory management including garbage collection strategies, manual memory control, destructors, move semantics, ref/ptr types, memory safety, and optimization techniq |
| `/nim-metaprogramming` | nim: Use when nim's metaprogramming including macros, templates, compile-time evaluation, AST manipulation, code generation, DSL creation, and leveraging compile-time computation for pe |
| `/objc-arc-patterns` | objective-c: Use when automatic Reference Counting in Objective-C including strong/weak references, retain cycles, ownership qualifiers, bridging with Core Foundation, and patterns for memory-s |
| `/objc-blocks-gcd` | objective-c: Use when blocks (closures) and Grand Central Dispatch in Objective-C for concurrent programming including block syntax, capture semantics, dispatch queues, dispatch groups, and pat |
| `/objc-protocols-categories` | objective-c: Use when objective-C protocols for defining interfaces and categories for extending classes, including formal protocols, optional methods, class extensions, and patterns for modula |
| `/php-composer-autoloading` | php: Use when composer package management and PSR-4 autoloading including dependency management, autoload strategies, package creation, version constraints, and patterns for modern PHP  |
| `/php-modern-features` | php: Use when modern PHP features including typed properties, union types, match expressions, named arguments, attributes, enums, and patterns for writing type-safe, expressive PHP code |
| `/php-security-patterns` | php: Use when essential PHP security patterns including input validation, SQL injection prevention, XSS protection, CSRF tokens, password hashing, secure session management, and defense |
| `/python-async-patterns` | python: Master Python asynchronous programming with asyncio, async/await |
| `/python-data-classes` | python: Use when Python data modeling with dataclasses, attrs, and Pydantic. Use when creating data structures and models. |
| `/python-type-system` | python: Use when Python's type system including type hints, mypy, Protocol, TypedDict, and Generics. Use when working with Python type annotations. |
| `/ruby-blocks-procs-lambdas` | ruby: Use when working with Ruby blocks, procs, lambdas, and functional programming patterns including closures and higher-order functions. |
| `/ruby-gems-and-bundler` | ruby: Use when working with Ruby gems, Bundler for dependency management, creating gemspecs, and publishing gems to RubyGems. |
| `/ruby-metaprogramming` | ruby: Use when working with Ruby metaprogramming features including dynamic method definition, method_missing, class_eval, define_method, and reflection. |
| `/ruby-object-oriented-programming` | ruby: Use when working with Ruby's object-oriented programming features including classes, modules, inheritance, mixins, and method visibility. |
| `/ruby-standard-library` | ruby: Use when working with Ruby's standard library including Enumerable, File I/O, Time/Date, Regular Expressions, and core classes. |
| `/rust-async-patterns` | rust: Use when Rust async programming with tokio, async/await, and futures. Use when writing asynchronous Rust code. |
| `/rust-error-handling` | rust: Use when Rust error handling with Result, Option, custom errors, thiserror, and anyhow. Use when handling errors in Rust applications. |
| `/rust-ownership-system` | rust: Use when Rust's ownership system including ownership rules, borrowing, lifetimes, and memory safety. Use when working with Rust memory management. |
| `/scala-collections` | scala: Use when scala collections including immutable/mutable variants, List, Vector, Set, Map operations, collection transformations, lazy evaluation with views, parallel collections, an |
| `/scala-functional-patterns` | scala: Use when functional programming patterns in Scala including higher-order functions, immutability, pattern matching, algebraic data types, monads, for-comprehensions, and functional |
| `/scala-type-system` | scala: Use when scala's advanced type system including generics, variance, type bounds, implicit conversions, type classes, higher-kinded types, path-dependent types, and abstract type me |
| `/swift-concurrency` | swift: Use when swift's modern concurrency model including async/await, actors, task groups, structured concurrency, and async sequences for building safe, performant concurrent code with |
| `/swift-optionals-patterns` | swift: Use when swift's optional handling patterns including optional binding, chaining, nil coalescing, and modern approaches to safely working with optional values while avoiding common |
| `/swift-protocol-oriented` | swift: Use when protocol-oriented programming in Swift including protocol extensions, default implementations, protocol composition, associated types, and designing flexible, reusable abs |
| `/typescript-async-patterns` | typescript: Use when typeScript async patterns including Promises, async/await, and async iterators with proper typing. Use when writing asynchronous TypeScript code. |
| `/typescript-typescript-type-system` | typescript: Use when working with TypeScript's type system including strict mode, advanced types, generics, type guards, and compiler configuration. |
| `/typescript-utility-types` | typescript: Use when typeScript utility types, mapped types, and advanced type manipulation. Use when creating flexible, type-safe TypeScript code. |
| `/sip-authentication-security` | sip: Use when implementing SIP authentication, security mechanisms, and encryption. Use when securing SIP servers, clients, or proxies. |
| `/sip-media-negotiation` | sip: Use when handling SDP offer/answer, codec negotiation, media capabilities, and RTP session setup in SIP applications. |
| `/sip-protocol-fundamentals` | sip: Use when working with SIP messages, methods, call flows, and protocol fundamentals for VoIP applications. |
| `/tensorflow-data-pipelines` | tensorflow: Create efficient data pipelines with tf.data |
| `/tensorflow-model-deployment` | tensorflow: Deploy and serve TensorFlow models |
| `/tensorflow-neural-networks` | tensorflow: Build and train neural networks with TensorFlow |
| `/absinthe-resolvers` | absinthe-graphql: Use when implementing GraphQL resolvers with Absinthe. Covers resolver patterns, dataloader integration, batching, and error handling. |
| `/absinthe-schema` | absinthe-graphql: Use when designing GraphQL schemas with Absinthe. Covers type definitions, interfaces, unions, enums, and schema organization patterns. |
| `/absinthe-subscriptions` | absinthe-graphql: Use when implementing real-time GraphQL subscriptions with Absinthe. Covers Phoenix channels, PubSub, and subscription patterns. |
| `/apollo-caching-strategies` | apollo-graphql: Use when implementing Apollo caching strategies including cache policies, optimistic UI, cache updates, and normalization. |
| `/apollo-client-patterns` | apollo-graphql: Use when implementing Apollo Client patterns for queries, mutations, cache management, and local state in React applications. |
| `/apollo-server-patterns` | apollo-graphql: Use when building GraphQL APIs with Apollo Server requiring resolvers, data sources, schema design, and federation. |
| `/bun-bundler` | bun: Use when bundling JavaScript/TypeScript code with Bun's fast bundler. Covers building for different targets, tree-shaking, code splitting, and optimization strategies. |
| `/bun-package-manager` | bun: Use when managing dependencies with Bun's package manager. Covers installing packages, workspaces, lockfiles, and migrating from npm/yarn/pnpm to Bun. |
| `/bun-runtime` | bun: Use when working with Bun's runtime APIs including file I/O, HTTP servers, and native APIs. Covers modern JavaScript/TypeScript execution in Bun's fast runtime environment. |
| `/bun-sqlite` | bun: Use when working with SQLite databases in Bun. Covers Bun's built-in SQLite driver, database operations, prepared statements, and transactions with high performance. |
| `/bun-testing` | bun: Use when writing tests with Bun's built-in test runner. Covers test organization, assertions, mocking, and snapshot testing using Bun's fast test infrastructure. |
| `/graphql-performance` | graphql: Use when optimizing GraphQL API performance with query complexity analysis, batching, caching strategies, depth limiting, monitoring, and database optimization. |
| `/graphql-resolvers` | graphql: Use when implementing GraphQL resolvers with resolver functions, context management, DataLoader batching, error handling, authentication, and testing strategies. |
| `/graphql-schema-design` | graphql: Use when designing GraphQL schemas with type system, SDL patterns, field design, pagination, directives, and versioning strategies for maintainable and scalable APIs. |
| `/tailwind-components` | tailwind: Use when building reusable component patterns with Tailwind CSS. Covers component extraction, @apply directive, and composable design patterns. |
| `/tailwind-configuration` | tailwind: Use when setting up or customizing Tailwind CSS configuration, theme customization, plugins, and build setup. Covers tailwind.config.js setup and content paths. |
| `/tailwind-performance` | tailwind: Use when optimizing Tailwind CSS for production, reducing bundle size, and improving performance. Covers PurgeCSS, JIT mode, and build optimization. |
| `/tailwind-responsive-design` | tailwind: Use when building responsive layouts and mobile-first designs with Tailwind CSS. Covers breakpoints, container queries, and responsive utilities. |
| `/tailwind-utility-classes` | tailwind: Use when working with Tailwind CSS utility classes for layout, spacing, typography, colors, and visual effects. Covers utility-first CSS patterns and class composition. |
| `/shell-error-handling` | shellcheck: Use when implementing error handling, cleanup routines, or debugging in shell scripts. Covers traps, exit codes, and robust error patterns. |
| `/shell-portability` | shellcheck: Use when writing shell scripts that need to run across different systems, shells, or environments. Covers POSIX compatibility and platform differences. |
| `/shell-scripting-fundamentals` | shellcheck: Use when writing or modifying Bash/shell scripts. Covers script structure, variables, quoting, conditionals, and loops with modern best practices. |
| `/shell-best-practices` | shfmt: Use when writing shell scripts following modern best practices. Covers portable scripting, Bash patterns, error handling, and secure coding. |

# Code Architecture
| Execution | What it does |
| --- | --- |
| `/architect` | core: Design system architecture and high-level technical strategy |
| `/explicit-configuration` | core: Prefer explicit configuration over framework defaults to prevent environment-dependent failures |
| `/orthogonality-principle` | core: Use when designing modules, APIs, and system architecture requiring independent, non-overlapping components where changes in one don't affect others. |
| `/simplicity-principles` | core: Use when designing solutions, adding features, or refactoring by applying KISS, YAGNI, and Principle of Least Astonishment to write simple, predictable code. |
| `/solid-principles` | core: Use during implementation when designing modules, functions, and components requiring SOLID principles for maintainable, flexible architecture. |
| `/structural-design-principles` | core: Use when designing modules and components requiring Composition Over Inheritance, Law of Demeter, Tell Don't Ask, and Encapsulation principles that transcend programming paradigms. |
| `/monorepo-architecture` | monorepo: Use when designing monorepo structure, organizing packages, or migrating to monorepo architecture with architectural patterns for managing dependencies and scalable workspace confi |
| `/oop-encapsulation` | oop: Use when applying encapsulation and information hiding principles in object-oriented design. Use when controlling access to object state and behavior. |
| `/oop-inheritance-composition` | oop: Use when deciding between inheritance and composition in object-oriented design. Use when creating class hierarchies or composing objects from smaller components. |
| `/oop-polymorphism` | oop: Use when implementing polymorphism and interfaces in object-oriented design. Use when creating flexible, extensible systems with interchangeable components. |

# Dev Tooling
| Execution | What it does |
| --- | --- |
| `/commit-strategy` | git-storytelling: Use when planning commit strategies or determining when to commit changes. Helps developers commit early and often to tell the story of their development process. |
| `/git-branch-strategy` | git-storytelling: Use when planning git branching strategies or managing branches for development. Helps create clear development narratives through effective branch organization and workflow patter |
| `/git-commit-messages` | git-storytelling: Use when writing commit messages that clearly communicate changes and tell the story of development. Helps create informative, well-structured commit messages that serve as documen |
| `/worktree-management` | git-worktrees: Manage git worktrees - list active worktrees, prune stale ones, and merge work back into the main branch. |
| `/monorepo-tooling` | monorepo: Use when setting up monorepo tooling, optimizing builds, or migrating between tools with Turborepo, Nx, Bazel, Lerna for efficient task running, caching, and code generation. |
| `/search-code` | github: Search for code across GitHub repositories |
| `/search-code` | gitlab: Search for code across your GitLab instance |
| `/maven-build-lifecycle` | maven: Use when working with Maven build phases, goals, profiles, or customizing the build process for Java projects. |
| `/maven-dependency-management` | maven: Use when managing Maven dependencies, resolving dependency conflicts, configuring BOMs, or optimizing dependency trees in Java projects. |
| `/maven-plugin-configuration` | maven: Use when configuring Maven plugins, setting up common plugins like compiler, surefire, jar, or creating custom plugin executions. |
| `/environment-management` | mise: Use when managing environment variables and project settings with Mise. Covers env configuration, direnv replacement, and per-directory settings. |
| `/task-configuration` | mise: Use when defining and configuring Mise tasks in mise.toml. Covers task definitions, dependencies, file tasks, and parallel execution. |
| `/tool-management` | mise: Use when managing development tool versions with Mise. Covers installing tools, version pinning, and replacing language-specific version managers. |
| `/syncpack-configuration` | syncpack: Use when setting up or configuring syncpack for a monorepo. Covers configuration files, workspace detection, and custom rule definitions for dependency version management. |
| `/syncpack-version-groups` | syncpack: Use when defining version policies, banning dependencies, pinning versions, or creating partitioned version groups in syncpack. Covers advanced version management patterns. |

## Requirements
| Execution | What it does |
| --- | --- |
| `/comment` | clickup: Add a comment to a ClickUp task |
| `/complete` | clickup: Mark a ClickUp task as complete after validating checklist |
| `/create` | clickup: Create a new ClickUp task interactively |
| `/my-tasks` | clickup: Show all ClickUp tasks assigned to you |
| `/search` | clickup: Search for ClickUp tasks |
| `/start` | clickup: Start work on a ClickUp task (transition to In Progress) |
| `/task` | clickup: Get detailed information about a specific ClickUp task |
| `/validate` | clickup: Validate checklist items for a ClickUp task without changing status |
| `/create-issue` | github: Create a new issue in a GitHub repository |
| `/create-issue` | gitlab: Create a new issue in a GitLab project |
| `/comment` | jira: Add a comment to a Jira ticket |
| `/complete` | jira: Mark a Jira ticket as complete after validating acceptance criteria |
| `/create` | jira: Create a new Jira ticket interactively |
| `/my-tickets` | jira: Show all Jira tickets assigned to you |
| `/search` | jira: Search for Jira tickets using JQL or text |
| `/start` | jira: Start work on a Jira ticket (transition to In Progress) |
| `/ticket` | jira: Get detailed information about a specific Jira ticket |
| `/validate` | jira: Validate acceptance criteria for a Jira ticket without changing status |
| `/comment` | linear: Add a comment to a Linear issue |
| `/complete` | linear: Mark a Linear issue as complete after validating acceptance criteria |
| `/create` | linear: Create a new Linear issue interactively |
| `/issue` | linear: Get detailed information about a specific Linear issue |
| `/my-issues` | linear: Show all Linear issues assigned to you |
| `/search` | linear: Search for Linear issues |
| `/start` | linear: Start work on a Linear issue (transition to In Progress) |
| `/validate` | linear: Validate acceptance criteria for a Linear issue without changing status |

## Developing
| Execution | What it does |
| --- | --- |
| `/baseline-restorer` | core: Use when multiple fix attempts fail and you need to systematically restore to a working baseline and reimplement instead of fixing broken code. |
| `/debug` | core: Investigate and diagnose issues without necessarily fixing them |
| `/fix` | core: Debug and fix bugs, errors, or unexpected behavior |
| `/optimize` | core: Optimize code for performance, readability, or efficiency |
| `/resume-from-pr` | github: Resume work on a pull request by loading its context, diff, CI status, and review comments |

## Testing
| Execution | What it does |
| --- | --- |
| `/test` | core: Write tests for code using test-driven development principles |
| `/bdd-collaboration` | bdd: Use when facilitating BDD collaboration between developers, testers, and business stakeholders. Use when running discovery workshops and example mapping sessions. |
| `/bdd-patterns` | bdd: Use when applying Behavior-Driven Development patterns including Given-When-Then structure, feature files, and acceptance criteria. Use when writing BDD-style tests and specificati |
| `/bdd-principles` | bdd: Core BDD concepts, philosophy, and the Three Amigos practice |
| `/bdd-scenarios` | bdd: Use when writing effective BDD scenarios including acceptance criteria, edge cases, and scenario organization. Use when defining behavior specifications. |
| `/test-driven-development` | tdd: Use when writing new functions, adding features, fixing bugs, or refactoring by applying TDD principles - write failing tests before implementation code, make them pass, then refac |
| `/cucumber-best-practices` | cucumber: Cucumber best practices, patterns, and anti-patterns |
| `/cucumber-fundamentals` | cucumber: Core Cucumber concepts, Gherkin syntax, and feature file structure |
| `/cucumber-step-definitions` | cucumber: Writing effective step definitions and organizing test code |
| `/cypress-advanced` | cypress: Use when advanced Cypress features including custom commands, plugins, and network stubbing. |
| `/cypress-ci-cd` | cypress: Use when cypress CI/CD integration including parallelization, test recording, and media capture. |
| `/cypress-fundamentals` | cypress: Use when cypress fundamentals including commands, assertions, fixtures, and E2E testing patterns. |
| `/graphql-inspector-audit` | graphql-inspector: Use when auditing GraphQL operations for complexity metrics, depth analysis, directive usage, or query performance concerns. |
| `/graphql-inspector-ci` | graphql-inspector: Use when setting up GraphQL Inspector in CI/CD pipelines, GitHub Actions, or GitLab CI for automated schema validation. |
| `/graphql-inspector-diff` | graphql-inspector: Use when detecting breaking changes between GraphQL schema versions, comparing schemas across branches, or validating schema migrations. |
| `/graphql-inspector-validate` | graphql-inspector: Use when validating GraphQL operations/documents against a schema, checking query depth, complexity, or fragment usage. |
| `/jest-advanced` | jest: Use when advanced Jest features including custom matchers, parameterized tests with test.each, coverage configuration, and performance optimization. |
| `/jest-configuration` | jest: Use when jest configuration, setup files, module resolution, and project organization for optimal testing environments. |
| `/jest-testing-patterns` | jest: Use when jest testing patterns including unit tests, mocks, spies, snapshots, and assertion techniques for comprehensive test coverage. |
| `/junit-extensions` | junit: Use when jUnit extensions including custom extensions, rules, and conditional test execution. |
| `/junit-fundamentals` | junit: Use when jUnit fundamentals including annotations, assertions, and test lifecycle for Java testing. |
| `/junit-parameterized` | junit: Use when jUnit parameterized tests with various value sources and test factories. |
| `/mocha-assertions` | mocha: Use when assertion libraries for Mocha including Chai with expect, should, and assert styles. |
| `/mocha-configuration` | mocha: Use when mocha configuration including reporters, config files, plugins, and CI integration. |
| `/mocha-fundamentals` | mocha: Use when mocha test structure, hooks, and async testing patterns for JavaScript testing. |
| `/playwright-bdd-configuration` | playwright-bdd: Use when configuring Playwright BDD projects, setting up defineBddConfig(), configuring feature and step file paths, and integrating with Playwright config. |
| `/playwright-bdd-gherkin-syntax` | playwright-bdd: Use when writing Gherkin feature files, using Scenario Outline with Examples, applying tags for test organization, and leveraging Background sections for shared setup. |
| `/playwright-bdd-step-definitions` | playwright-bdd: Use when creating step definitions with Given, When, Then, using createBdd() for step functions, implementing Page Object Model patterns, and sharing fixtures between steps. |
| `/playwright-fixtures-and-hooks` | playwright: Use when managing test state and infrastructure with reusable Playwright fixtures and lifecycle hooks for efficient test setup and teardown. |
| `/playwright-page-object-model` | playwright: Use when creating page objects or refactoring Playwright tests for better maintainability with Page Object Model patterns. |
| `/playwright-test-architecture` | playwright: Use when setting up Playwright test projects and organizing test suites with proper configuration and project structure. |
| `/pytest-advanced` | pytest: Use when advanced Pytest features including markers, custom assertions, hooks, and coverage configuration. |
| `/pytest-fixtures` | pytest: Use when pytest fixtures, conftest files, parametrize decorators, and fixture scopes for comprehensive test setup. |
| `/pytest-plugins` | pytest: Use when pytest plugin ecosystem including pytest-cov, pytest-mock, and custom plugin development. |
| `/rspec-advanced` | rspec: Use when advanced RSpec features including custom matchers, shared examples, metadata, and hooks. |
| `/rspec-fundamentals` | rspec: Use when rSpec fundamentals including describe, context, it blocks, let, and basic matchers for BDD testing. |
| `/rspec-mocking` | rspec: Use when rSpec mocking with doubles, stubs, mocks, spies, and partial mocking strategies. |
| `/testng-data-driven` | testng: Use when implementing data-driven tests with TestNG DataProviders, factory methods, and parameterization patterns. |
| `/testng-fundamentals` | testng: Use when working with TestNG annotations, assertions, test lifecycle, and configuration for Java testing. |
| `/testng-parallel` | testng: Use when configuring parallel test execution with TestNG including thread pools, suite configuration, and synchronization. |
| `/vitest-configuration` | vitest: Use when vitest configuration, Vite integration, workspace setup, and test environment configuration for modern testing. |
| `/vitest-performance` | vitest: Use when vitest performance optimization including fast execution, watch mode, and parallelization strategies. |
| `/vitest-testing-patterns` | vitest: Use when vitest testing patterns including unit tests, mocks, spies, and browser mode testing. |

## Code Review
| Execution | What it does |
| --- | --- |
| `/code-review` | core: Code review a pull request |
| `/review` | core: Multi-agent code review with confidence-based filtering |
| `/create-pr` | github: Create a new pull request in a GitHub repository |
| `/load-pr-context` | github: Load PR context for the current branch using GitHub MCP tools |
| `/review-pr` | github: Get comprehensive review of a GitHub pull request |
| `/create-mr` | gitlab: Create a new merge request in a GitLab project |
| `/load-mr-context` | gitlab: Load MR context for the current branch using GitLab MCP tools |
| `/review-mr` | gitlab: Get comprehensive review of a GitLab merge request |
| `/code-review` | session-code-review: Review current branch changes against REVIEW.md guidelines |

## Deploying
| Execution | What it does |
| --- | --- |
| `/monorepo-workflows` | monorepo: Use when setting up CI/CD, implementing versioning, optimizing workflows, or managing releases with monorepo development workflows including version management, publishing, and tea |
| `/view-workflow` | github: View GitHub Actions workflow runs and status |
| `/monitor-pipeline` | gitlab: Monitor a GitLab pipeline or job until completion, reporting status changes and failures in real-time |
| `/view-pipeline` | gitlab: View CI/CD pipeline status for a merge request or project |
| `/act-docker-setup` | act: Use when configuring Docker environments for act, selecting runner images, managing container resources, or troubleshooting Docker-related issues with local GitHub Actions testing. |
| `/act-local-testing` | act: Use when testing GitHub Actions workflows locally with act. Covers act CLI usage, Docker configuration, debugging workflows, and troubleshooting common issues when running workflow |
| `/act-workflow-syntax` | act: Use when creating or modifying GitHub Actions workflow files. Provides guidance on workflow syntax, triggers, jobs, steps, and expressions for creating valid GitHub Actions workflo |
| `/ansible-inventory` | ansible: Use when managing hosts and groups in Ansible inventory for organizing infrastructure and applying configurations across environments. |
| `/ansible-playbooks` | ansible: Use when writing and organizing Ansible playbooks for automated configuration management and infrastructure orchestration. |
| `/ansible-roles` | ansible: Use when structuring and reusing code with Ansible roles for modular, maintainable automation and configuration management. |
| `/docker-compose-basics` | docker-compose: Use when defining and running multi-container Docker applications with Docker Compose YAML configuration. |
| `/docker-compose-networking` | docker-compose: Use when configuring networks and service communication in Docker Compose including bridge networks, overlay networks, service discovery, and inter-service communication. |
| `/docker-compose-production` | docker-compose: Use when deploying Docker Compose applications to production including security hardening, resource management, health checks, logging, monitoring, and high-availability patterns. |
| `/artifacts-caching` | gitlab-ci: Use when configuring artifacts for inter-job data passing or caching for faster builds. Covers cache strategies and artifact management. |
| `/cicd-best-practices` | gitlab-ci: Use when optimizing GitLab CI/CD pipelines for performance, reliability, or maintainability. Covers pipeline optimization and organizational patterns. |
| `/job-configuration` | gitlab-ci: Use when defining GitLab CI jobs, configuring scripts, setting up environments, or managing job dependencies. Covers job structure and execution options. |
| `/pipeline-configuration` | gitlab-ci: Use when configuring GitLab CI/CD pipelines, defining stages, or setting up workflow rules. Covers pipeline structure, stage ordering, and execution flow. |
| `/variables-secrets` | gitlab-ci: Use when configuring GitLab CI/CD variables, managing secrets, or integrating with external secret providers. Covers secure credential handling. |
| `/helm-charts` | helm: Use when understanding and creating Helm charts for packaging and deploying Kubernetes applications. |
| `/helm-templates` | helm: Use when working with Helm templates and template functions for generating Kubernetes manifests dynamically. |
| `/helm-values` | helm: Use when managing Helm values files and configuration overrides for customizing Kubernetes deployments. |
| `/kubernetes-manifests` | kubernetes: Use when writing and deploying Kubernetes manifests for container orchestration. |
| `/kubernetes-resources` | kubernetes: Use when managing Kubernetes resources including deployments, services, configmaps, and secrets. |
| `/kubernetes-security` | kubernetes: Use when implementing Kubernetes security best practices including RBAC, pod security policies, and network policies. |
| `/kustomize-basics` | kustomize: Use when customizing Kubernetes configurations without templates using Kustomize overlays and patches. |
| `/kustomize-generators` | kustomize: Use when generating ConfigMaps and Secrets with Kustomize for Kubernetes configuration management. |
| `/kustomize-overlays` | kustomize: Use when managing environment-specific Kubernetes configurations with Kustomize overlays and patches. |
| `/pulumi-basics` | pulumi: Use when writing infrastructure-as-code with Pulumi using programming languages for cloud resource provisioning. |
| `/pulumi-components` | pulumi: Use when building reusable infrastructure components with Pulumi for modular, composable cloud resources. |
| `/pulumi-stacks` | pulumi: Use when managing multiple environments with Pulumi stacks for development, staging, and production deployments. |
| `/terraform-configuration` | terraform: Use when writing and organizing Terraform infrastructure-as-code configurations for cloud resource provisioning. |
| `/terraform-modules` | terraform: Use when creating and using reusable Terraform modules for organizing and sharing infrastructure code. |
| `/terraform-state` | terraform: Use when managing Terraform state files, remote backends, and state locking for infrastructure coordination. |

## Codebase Health
| Execution | What it does |
| --- | --- |
| `/boy-scout-rule` | core: Use when modifying existing files, refactoring, improving code quality, or touching legacy code by applying the Boy Scout Rule to leave code better than you found it. |
| `/legacy-code-safety` | core: Use when modifying, removing, or refactoring code that lacks test coverage. Emphasizes the danger of untested changes and the RGR workflow to add characterization tests before modi |
| `/refactor` | core: Restructure code to improve quality without changing behavior |
| `/ameba-configuration` | ameba: Use when configuring Ameba rules and settings for Crystal projects including .ameba.yml setup, rule management, severity levels, and code quality enforcement. |
| `/ameba-custom-rules` | ameba: Use when creating custom Ameba rules for Crystal code analysis including rule development, AST traversal, issue reporting, and rule testing. |
| `/ameba-integration` | ameba: Use when integrating Ameba into development workflows including CI/CD pipelines, pre-commit hooks, GitHub Actions, and automated code review processes. |
| `/biome-configuration` | biome: Use when biome configuration including biome.json setup, schema versions, VCS integration, and project organization. |
| `/biome-formatting` | biome: Use when formatting JavaScript/TypeScript code with Biome's fast formatter including patterns, options, and code style management. |
| `/biome-linting` | biome: Use when applying Biome's linting capabilities, rule categories, and code quality enforcement to JavaScript/TypeScript projects. |
| `/checkstyle-configuration` | checkstyle: Use when configuring Checkstyle for Java projects with XML config, custom checks, properties, and module setup. |
| `/checkstyle-custom` | checkstyle: Use when developing custom Checkstyle checks, filters, and plugin integrations for project-specific Java code standards. |
| `/checkstyle-rules` | checkstyle: Use when applying Checkstyle built-in checks for Java code including naming conventions, code metrics, and suppressions. |
| `/clippy-configuration` | clippy: Use when configuring Clippy for Rust projects with TOML config, lint groups, attributes, and workspace setup. |
| `/clippy-custom` | clippy: Use when developing custom Clippy lints, implementing lint passes, and contributing to Clippy for Rust code standards. |
| `/clippy-lints` | clippy: Use when applying Clippy lint categories for Rust code including correctness, performance, style, and custom lint configuration. |
| `/credo-checks` | credo: Use when understanding and fixing common Credo check issues for Elixir code quality and consistency. |
| `/credo-configuration` | credo: Use when configuring Credo static analysis for Elixir projects requiring customized code quality rules and settings. |
| `/credo-custom-checks` | credo: Use when creating custom Credo checks for project-specific code quality rules and standards in Elixir. |
| `/dialyzer-analysis` | dialyzer: Use when analyzing and fixing Dialyzer warnings and type discrepancies in Erlang/Elixir code. |
| `/dialyzer-configuration` | dialyzer: Use when configuring Dialyzer for Erlang/Elixir type checking and static analysis. |
| `/dialyzer-integration` | dialyzer: Use when integrating Dialyzer into development workflows and CI/CD pipelines for Erlang/Elixir projects. |
| `/eslint-configuration` | eslint: Use when eSLint configuration including config files, extends, plugins, and environment setup. |
| `/eslint-custom` | eslint: Use when custom ESLint rules and plugins including rule development, AST traversal, and publishing. |
| `/eslint-rules` | eslint: Use when eSLint built-in rules including rule configuration, severity levels, and disabling strategies. |
| `/markdownlint-configuration` | markdown: Configure markdownlint rules and options including rule management, configuration files, inline comments, and style inheritance. |
| `/markdownlint-custom-rules` | markdown: Create custom linting rules for markdownlint including rule structure, parser integration, error reporting, and automatic fixing. |
| `/markdownlint-integration` | markdown: Integrate markdownlint into development workflows including CLI usage, programmatic API, CI/CD pipelines, and editor integration. |
| `/prettier-configuration` | prettier: Use when prettier configuration including options, config files, ignore patterns, and formatting rules. |
| `/prettier-integration` | prettier: Use when prettier integration with editors, pre-commit hooks, ESLint, and CI/CD pipelines. |
| `/prettier-plugins` | prettier: Use when prettier plugins including plugin ecosystem, custom parsers, and plugin development. |
| `/pylint-checkers` | pylint: Use when pylint checkers including built-in checkers, custom checkers, and checker development. |
| `/pylint-configuration` | pylint: Use when pylint configuration including pylintrc, message control, plugins, and scoring system. |
| `/pylint-integration` | pylint: Use when pylint CI integration including plugins, editor integration, and performance tuning. |
| `/rubocop-configuration` | rubocop: Use when ruboCop configuration including YAML config, departments, inheritance, and customization. |
| `/rubocop-cops` | rubocop: Use when ruboCop cops including built-in cops, configuration, auto-correction, and development. |
| `/rubocop-integration` | rubocop: Use when ruboCop CI integration including GitHub Actions, plugins, and performance optimization. |
| `/shfmt-configuration` | shfmt: Use when configuring shfmt for shell script formatting including .shfmt.toml setup, EditorConfig integration, and project-specific settings. |
| `/shfmt-formatting` | shfmt: Use when formatting shell scripts with shfmt. Covers consistent formatting patterns, shell dialect support, common issues, and editor integration. |

## Mobile App Specific
| Execution | What it does |
| --- | --- |
| `/android-architecture` | android: Use when implementing MVVM, clean architecture, dependency injection with Hilt, or structuring Android app layers. |
| `/jetpack-compose` | android: Use when building Android UIs with Jetpack Compose, managing state with remember/mutableStateOf, or implementing declarative UI patterns. |
| `/kotlin-coroutines` | android: Use when implementing async operations with Kotlin coroutines, Flow, StateFlow, or managing concurrency in Android apps. |
| `/swift-concurrency` | ios: Use when implementing async/await, Task management, actors, or Combine reactive patterns in iOS applications. |
| `/swiftui-patterns` | ios: Use when building SwiftUI views, managing state with @State/@Binding/@ObservableObject, or implementing declarative UI patterns in iOS apps. |
| `/uikit-architecture` | ios: Use when building iOS apps with UIKit, implementing MVVM/MVC/Coordinator patterns, or integrating UIKit with SwiftUI. |
| `/podspec-fundamentals` | cocoapods: Use when creating or modifying CocoaPods podspec files. Covers required attributes, file patterns, dependencies, and platform specifications for iOS, macOS, tvOS, watchOS, and visi |
| `/privacy-manifests` | cocoapods: Use when implementing iOS 17+ privacy manifests for CocoaPods libraries. Covers PrivacyInfo.xcprivacy file creation, required reasons API declarations, and proper resource bundle i |
| `/publishing-workflow` | cocoapods: Use when publishing CocoaPods libraries to CocoaPods Trunk. Covers pod trunk registration, podspec validation, version management, and publishing best practices for successful libr |
| `/subspecs-organization` | cocoapods: Use when organizing complex CocoaPods libraries into subspecs. Covers modular architecture, dependency management between subspecs, and default subspecs patterns for better code or |
| `/test-specs` | cocoapods: Use when adding automated tests to CocoaPods libraries using test specs. Covers test spec configuration, app host requirements, and testing patterns that integrate with pod lib lin |

## Documentation
| Execution | What it does |
| --- | --- |
| `/document` | core: Generate or update documentation for code, APIs, or systems |
| `/incident-response` | runbooks: Use when creating incident response procedures and on-call playbooks. Covers incident management, communication protocols, and post-mortem documentation. |
| `/runbook-structure` | runbooks: Use when creating structured operational runbooks for human operators. Covers runbook organization, documentation patterns, and best practices for clear operational procedures. |
| `/troubleshooting-guides` | runbooks: Use when creating troubleshooting guides and diagnostic procedures for operational issues. Covers problem diagnosis, root cause analysis, and systematic debugging. |
| `/blueprints-maintenance` | blueprints: Use after modifying existing systems to update blueprint documentation. Read blueprints before changes, update after. Prevents documentation drift. |
| `/blueprints-organization` | blueprints: Use when managing blueprints directory structure and avoiding duplication. Always search existing blueprints before creating to prevent duplicate documentation. Handles naming conv |
| `/blueprints-writing` | blueprints: Use when creating or updating technical blueprint documentation for new features, API changes, or architectural modifications. Always search existing blueprints first to avoid dupl |
| `/create-blueprint` | blueprints: Research a specific system and create or update its blueprints/ documentation |
| `/generate-blueprints` | blueprints: Deeply research all systems and create or update blueprints/ documentation for the entire codebase |
| `/markdown-documentation` | markdown: Use when writing technical documentation, READMEs, or project documentation in markdown. Covers structure, conventions, and best practices. |
| `/markdown-syntax-fundamentals` | markdown: Use when writing or editing markdown files. Covers headings, text formatting, lists, links, images, code blocks, and blockquotes. |
| `/markdown-tables` | markdown: Use when creating or formatting tables in markdown. Covers table syntax, alignment, escaping, and best practices. |

## Security
| Execution | What it does |
| --- | --- |
| `/configuration` | fnox: Use when configuring Fnox secrets management with fnox.toml. Covers file structure, secrets definition, profiles, and hierarchical configurations. |
| `/providers` | fnox: Use when configuring Fnox providers for encryption and secret storage. Covers age encryption, cloud providers (AWS, Azure, GCP), and password managers. |
| `/security-best-practices` | fnox: Use when implementing secure secrets management with Fnox. Covers encryption, key management, access control, and security hardening. |

## Product Health
| Execution | What it does |
| --- | --- |
| `/sre-incident-response` | site-reliability-engineering: Use when responding to production incidents following SRE principles and best practices. |
| `/sre-monitoring` | site-reliability-engineering: Use when building comprehensive monitoring and observability systems. |
| `/sre-reliability` | site-reliability-engineering: Use when building reliable and scalable distributed systems. |
| `/analyze-performance` | sentry: Analyze performance metrics and identify slow transactions in Sentry |
| `/check-releases` | sentry: Check release health and compare error rates across deployments |
| `/incident-response` | sentry: Manage incident response workflow with Sentry alerts and issue tracking |
| `/investigate-errors` | sentry: Investigate recent errors and exceptions in your Sentry projects |
| `/query-events` | sentry: Run custom queries on Sentry events and issues with advanced filtering |
| `/alerts-issues` | sentry: Use when configuring Sentry alerts, managing issues, or setting up notifications. Covers alert rules, issue triage, and integrations. |
| `/error-capturing` | sentry: Use when capturing and reporting errors to Sentry, adding context, or handling exceptions. Covers error boundaries, context enrichment, and fingerprinting. |
| `/performance-monitoring` | sentry: Use when setting up performance monitoring, distributed tracing, or profiling with Sentry. Covers transactions, spans, and performance insights. |
| `/release-management` | sentry: Use when managing Sentry releases, uploading source maps, or tracking deployments. Covers release health and commit association. |
| `/sdk-configuration` | sentry: Use when initializing Sentry in applications, configuring SDK options, or setting up integrations across different frameworks and platforms. |

## Agent Safety
| Execution | What it does |
| --- | --- |
| `/scratch-workspace` | scratch: Use when creating temporary files, drafts, experiments, or any content that should not be committed to version control. Ensures proper placement in .claude/.scratch with gitignore  |

## Agent Only Assist
| Execution | What it does |
| --- | --- |
| `/explain` | core: Explain code, concepts, or technical decisions in clear, understandable terms |

# Scaffolding and Harness

## Harness Development
| Execution | What it does |
| --- | --- |
| `/agent-creation` | claude-agent-sdk: Use when creating or configuring Claude AI agents using the Agent SDK. Covers agent initialization, configuration, and basic setup patterns. |
| `/context-management` | claude-agent-sdk: Use when managing agent context, memory, and conversation state in Claude AI agents using the Agent SDK. |
| `/tool-integration` | claude-agent-sdk: Use when integrating tools, permissions, and MCP servers with Claude AI agents using the Agent SDK. |

## Token Savings
| Execution | What it does |
| --- | --- |
| `/silent-execution` | core: Reduce token waste by batching tool calls and avoiding narration between sequential operations |
| `/token-efficiency` | core: Minimize token consumption through efficient tool usage patterns |

## Anti Drift / Anti Hallucinations
| Execution | What it does |
| --- | --- |
| `/professional-honesty` | core: Use when responding to questions or providing information requiring professional honesty and directness over excessive agreeableness. |
| `/proof-of-work` | core: Use automatically during development workflows when making claims about tests, builds, verification, or code quality requiring concrete evidence to ensure trust through transparenc |

## Context Setting / Memory
| Execution | What it does |
| --- | --- |
| `/project-memory` | core: Use when setting up or organizing Claude Code project memory (CLAUDE.md, .claude/rules/) for better context awareness, consistent behavior, and project-specific instructions. |
| `/code-annotation-patterns` | notetaker: Use when annotating code with structured metadata, tags, and markers for AI-assisted development workflows. Covers annotation formats, semantic tags, and integration with developme |
| `/documentation-linking` | notetaker: Use when creating bidirectional links between code and documentation. Covers link patterns, documentation references, context preservation across artifacts, and maintaining synchro |
| `/note-taking-fundamentals` | notetaker: Use when leaving structured notes, comments, and annotations in code. Covers AI note-taking patterns, TODO formats, context preservation, and development breadcrumbs for future AI  |

## Knowledge Base
| Execution | What it does |
| --- | --- |
| `/create-sop` | agent-sop: Create a new Standard Operating Procedure (SOP) file with proper structure |
| `/sop-authoring` | agent-sop: Use when writing or creating new Standard Operating Procedures (SOPs) for AI agents. Covers effective SOP writing, clarity principles, and actionable instruction design. |
| `/sop-maintenance` | agent-sop: Use when updating, versioning, deprecating, or maintaining existing Standard Operating Procedures. Covers keeping SOPs accurate, relevant, and synchronized with implementation chan |
| `/sop-rfc2119` | agent-sop: Use when writing SOPs that require precise requirement levels using RFC 2119 constraint keywords (MUST, SHOULD, MAY). Covers proper usage of requirement keywords for deterministic  |
| `/sop-structure` | agent-sop: Use when structuring Standard Operating Procedures with proper sections, organization, and markdown formatting. Covers SOP anatomy and section organization. |
| `/update-sop` | agent-sop: Update an existing SOP to reflect changes in tools, processes, or best practices |

# Hooks
| Name | What it does |
| --- | --- |
| gemini-cli | Bridge hook config translating Gemini CLI events into Han hook invocations. |
| bushido | SessionStart: injects the seven Bushido virtues as guiding context for the session. |
| core | SessionStart/UserPromptSubmit/PreCompact/SubagentStop/SessionEnd/TaskCompleted: bootstraps the han CLI, injects datetime, enforces skill use and subagent delegation, detects spinning wheels, and records session metrics. |
| claude-plugin-development | PostToolUse/Stop/SubagentStop: validates Claude Code plugin structure and config after edits and before completion. |
| angular | Stop,SubagentStop: runs angular build/typecheck validation via `han hook run`. |
| django | Stop,SubagentStop: runs django build/typecheck validation via `han hook run`. |
| effect | Stop,SubagentStop: runs effect build/typecheck validation via `han hook run`. |
| expo | Stop,SubagentStop: runs expo build/typecheck validation via `han hook run`. |
| gluestack | Stop,SubagentStop: runs gluestack build/typecheck validation via `han hook run`. |
| nestjs | Stop,SubagentStop: runs nestjs build/typecheck validation via `han hook run`. |
| nextjs | Stop,SubagentStop: runs nextjs build/typecheck validation via `han hook run`. |
| relay | Stop,SubagentStop: runs relay build/typecheck validation via `han hook run`. |
| c | PostToolUse,Stop,SubagentStop: runs c compile/typecheck validation via `han hook run`. |
| cpp | PostToolUse,Stop,SubagentStop: runs cpp compile/typecheck validation via `han hook run`. |
| crystal | Stop,SubagentStop: runs crystal compile/typecheck validation via `han hook run`. |
| csharp | PostToolUse,Stop,SubagentStop: runs csharp compile/typecheck validation via `han hook run`. |
| elixir | PostToolUse,Stop,SubagentStop: runs elixir compile/typecheck validation via `han hook run`. |
| erlang | Stop,SubagentStop: runs erlang compile/typecheck validation via `han hook run`. |
| gleam | Stop,SubagentStop: runs gleam compile/typecheck validation via `han hook run`. |
| go | PostToolUse,Stop,SubagentStop: runs go compile/typecheck validation via `han hook run`. |
| java | Stop,SubagentStop: runs java compile/typecheck validation via `han hook run`. |
| kotlin | Stop,SubagentStop: runs kotlin compile/typecheck validation via `han hook run`. |
| lua | PostToolUse,Stop,SubagentStop: runs lua compile/typecheck validation via `han hook run`. |
| nim | Stop,SubagentStop: runs nim compile/typecheck validation via `han hook run`. |
| objective-c | PostToolUse,Stop,SubagentStop: runs objective-c compile/typecheck validation via `han hook run`. |
| php | PostToolUse,Stop,SubagentStop: runs php compile/typecheck validation via `han hook run`. |
| python | PostToolUse,Stop,SubagentStop: runs python compile/typecheck validation via `han hook run`. |
| ruby | Stop,SubagentStop: runs ruby compile/typecheck validation via `han hook run`. |
| rust | Stop,SubagentStop: runs rust compile/typecheck validation via `han hook run`. |
| scala | Stop,SubagentStop: runs scala compile/typecheck validation via `han hook run`. |
| swift | Stop,SubagentStop: runs swift compile/typecheck validation via `han hook run`. |
| typescript | PostToolUse,Stop,SubagentStop: runs typescript compile/typecheck validation via `han hook run`. |
| bdd | SessionStart: injects bdd methodology context at session start. |
| git-storytelling | Stop/SubagentStop: nudges thoughtful commits so work is committed as a story. |
| git-worktrees | PreToolUse: gives each subagent its own git worktree checkout to prevent interference. |
| monorepo | SessionStart: injects monorepo methodology context at session start. |
| tdd | SessionStart: injects tdd methodology context at session start. |
| github | SessionStart: loads GitHub PR context for the current branch. |
| gitlab | SessionStart: loads GitLab MR context for the current branch. |
| android | Stop,SubagentStop: runs android project validation via `han hook run`. |
| claude-agent-sdk | Stop,SubagentStop: runs claude-agent-sdk project validation via `han hook run`. |
| fnox | Stop,SubagentStop: runs fnox project validation via `han hook run`. |
| han-plugins | Stop,SubagentStop: runs han-plugins project validation via `han hook run`. |
| ios | Stop,SubagentStop: runs ios project validation via `han hook run`. |
| runbooks | Stop,SubagentStop: runs runbooks project validation via `han hook run`. |
| scratch | UserPromptSubmit: enforces that temporary files go in .claude/.scratch and are gitignored. |
| sentry | Stop,SubagentStop: runs sentry project validation via `han hook run`. |
| absinthe-graphql | Stop,SubagentStop: runs absinthe-graphql build/test/config validation via `han hook run`. |
| act | Stop,SubagentStop: runs act build/test/config validation via `han hook run`. |
| ansible | Stop,SubagentStop: runs ansible build/test/config validation via `han hook run`. |
| apollo-graphql | Stop,SubagentStop: runs apollo-graphql build/test/config validation via `han hook run`. |
| blueprints | SessionStart: injects blueprint documentation guidance so blueprints are read before and updated after changes. |
| bun | Stop,SubagentStop: runs bun build/test/config validation via `han hook run`. |
| cocoapods | Stop,SubagentStop: runs cocoapods build/test/config validation via `han hook run`. |
| cucumber | PostToolUse,Stop,SubagentStop: runs cucumber build/test/config validation via `han hook run`. |
| cypress | Stop,SubagentStop: runs cypress build/test/config validation via `han hook run`. |
| docker-compose | Stop,SubagentStop: runs docker-compose build/test/config validation via `han hook run`. |
| esbuild | Stop,SubagentStop: runs esbuild build/test/config validation via `han hook run`. |
| gitlab-ci | Stop,SubagentStop: runs gitlab-ci build/test/config validation via `han hook run`. |
| graphql-inspector | Stop,SubagentStop: runs graphql-inspector build/test/config validation via `han hook run`. |
| graphql | Stop,SubagentStop: runs graphql build/test/config validation via `han hook run`. |
| helm | Stop,SubagentStop: runs helm build/test/config validation via `han hook run`. |
| jest | PostToolUse,Stop,SubagentStop: runs jest build/test/config validation via `han hook run`. |
| junit | Stop,SubagentStop: runs junit build/test/config validation via `han hook run`. |
| kubernetes | Stop,SubagentStop: runs kubernetes build/test/config validation via `han hook run`. |
| kustomize | Stop,SubagentStop: runs kustomize build/test/config validation via `han hook run`. |
| lerna | Stop,SubagentStop: runs lerna build/test/config validation via `han hook run`. |
| maven | Stop,SubagentStop: runs maven build/test/config validation via `han hook run`. |
| mise | Stop,SubagentStop: runs mise build/test/config validation via `han hook run`. |
| mocha | PostToolUse,Stop,SubagentStop: runs mocha build/test/config validation via `han hook run`. |
| npm | Stop,SubagentStop: runs npm build/test/config validation via `han hook run`. |
| playwright-bdd | Stop,SubagentStop: runs playwright-bdd build/test/config validation via `han hook run`. |
| playwright | PostToolUse,Stop,SubagentStop: runs playwright build/test/config validation via `han hook run`. |
| pulumi | Stop,SubagentStop: runs pulumi build/test/config validation via `han hook run`. |
| pytest | PostToolUse,Stop,SubagentStop: runs pytest build/test/config validation via `han hook run`. |
| rollup | Stop,SubagentStop: runs rollup build/test/config validation via `han hook run`. |
| rspec | PostToolUse,Stop,SubagentStop: runs rspec build/test/config validation via `han hook run`. |
| storybook | Stop,SubagentStop: runs storybook build/test/config validation via `han hook run`. |
| syncpack | Stop,SubagentStop: runs syncpack build/test/config validation via `han hook run`. |
| tailwind | Stop,SubagentStop: runs tailwind build/test/config validation via `han hook run`. |
| terraform | Stop,SubagentStop: runs terraform build/test/config validation via `han hook run`. |
| testng | Stop,SubagentStop: runs testng build/test/config validation via `han hook run`. |
| vite | Stop,SubagentStop: runs vite build/test/config validation via `han hook run`. |
| vitest | PostToolUse,Stop,SubagentStop: runs vitest build/test/config validation via `han hook run`. |
| webpack | Stop,SubagentStop: runs webpack build/test/config validation via `han hook run`. |
| yarn | Stop,SubagentStop: runs yarn build/test/config validation via `han hook run`. |
| ameba | Stop,SubagentStop: runs ameba lint/format checks via `han hook run` so violations block completion. |
| biome | PostToolUse,Stop,SubagentStop: runs biome lint/format checks via `han hook run` so violations block completion. |
| checkstyle | Stop,SubagentStop: runs checkstyle lint/format checks via `han hook run` so violations block completion. |
| clippy | Stop,SubagentStop: runs clippy lint/format checks via `han hook run` so violations block completion. |
| credo | PostToolUse,Stop,SubagentStop: runs credo lint/format checks via `han hook run` so violations block completion. |
| dialyzer | Stop,SubagentStop: runs dialyzer lint/format checks via `han hook run` so violations block completion. |
| eslint | PostToolUse,Stop,SubagentStop: runs eslint lint/format checks via `han hook run` so violations block completion. |
| markdown | PostToolUse,Stop,SubagentStop: runs markdown lint/format checks via `han hook run` so violations block completion. |
| prettier | PostToolUse,Stop,SubagentStop: runs prettier lint/format checks via `han hook run` so violations block completion. |
| pylint | PostToolUse,Stop,SubagentStop: runs pylint lint/format checks via `han hook run` so violations block completion. |
| rubocop | PostToolUse,Stop,SubagentStop: runs rubocop lint/format checks via `han hook run` so violations block completion. |
| session-code-review | PreToolUse/Stop: backpressure review that validates changes against REVIEW.md before commits and session completion. |
| shellcheck | PostToolUse,Stop,SubagentStop: runs shellcheck lint/format checks via `han hook run` so violations block completion. |
| shfmt | PostToolUse,Stop,SubagentStop: runs shfmt lint/format checks via `han hook run` so violations block completion. |

# Agents
| Name | What it does |
| --- | --- |
| `ci-watcher` | core: Background agent that monitors CI/CD pipelines for open PRs/MRs and automatically triages and fixes failures via isolated fixer agents in worktrees |
| `accessibility-engineer` | accessibility-engineering: Specialized accessibility engineer with expertise in WCAG, ARIA, screen readers, and keyboard navigation. Use when implementing accessibility features or ensuring compliance with a |
| `assistive-tech-specialist` | accessibility-engineering: Specialized assistive technology specialist with expertise in screen readers, voice control, and alternative input methods. Use when optimizing for assistive technologies or implem |
| `inclusive-design-engineer` | accessibility-engineering: Specialized inclusive design engineer with expertise in universal design, internationalization (i18n), and localization (l10n). Use when implementing multi-language support or desi |
| `api-contract-engineer` | api-engineering: Specialized API contract engineer with expertise in OpenAPI, GraphQL schema design, and contract testing. Use when defining API contracts, implementing schema validation, or settin |
| `api-designer` | api-engineering: Specialized API designer with expertise in API architecture, contract design, and API evolution strategies. Use when designing APIs, creating API contracts, or planning API version |
| `api-gateway-engineer` | api-engineering: Specialized API gateway engineer with expertise in rate limiting, authentication, request/response transformation, and routing. Use when implementing API gateway patterns or managi |
| `api-designer` | backend-development: Use this agent when you need to design API contracts, analyze breaking changes |
| `backend-architect` | backend-development: Use this agent when you need to design data models, architect backend systems |
| `blockchain-engineer` | blockchain-development: Specialized blockchain engineer with expertise in blockchain architecture and consensus algorithms. Use when designing blockchain systems, implementing distributed ledger technolog |
| `smart-contract-engineer` | blockchain-development: Specialized smart contract engineer with expertise in Solidity, contract security, and gas optimization. Use when developing, auditing, or optimizing smart contracts for blockchain |
| `web3-engineer` | blockchain-development: Specialized Web3 engineer with expertise in dApps, wallets, and Web3 integration. Use when building decentralized applications, integrating with blockchain networks, or implementin |
| `plugin-developer` | claude-plugin-development: Use this agent for developing, maintaining, and improving Claude Code plugins. |
| `compiler-engineer` | compiler-engineering: Specialized compiler engineer with expertise in lexing, parsing, semantic analysis, and code generation. Use when building compilers, implementing language features, or optimizing  |
| `language-designer` | compiler-engineering: Specialized language designer with expertise in type systems, syntax design, and language ergonomics. Use when designing programming languages, type systems, or language features. |
| `vm-engineer` | compiler-engineering: Specialized VM engineer with expertise in bytecode, virtual machines, JIT compilation, and garbage collection. Use when building VMs, implementing interpreters, or optimizing runti |
| `blog-writer` | content-creation: Use when writing blog posts, articles, or long-form content. Expert at SEO optimization, compelling narratives, and audience-focused content. |
| `copywriter` | content-creation: Use when writing marketing copy, landing pages, ad copy, email campaigns, or sales materials. Expert at persuasive writing that converts. |
| `newsletter-writer` | content-creation: Use when creating email newsletters or subscriber communications. Expert at building relationships, providing value, and driving reader action through compelling storytelling. |
| `social-media-writer` | content-creation: Use when creating social media posts, tweets, or platform-specific content. Expert at crafting platform-optimized content that drives engagement and builds community. |
| `technical-writer` | content-creation: Use when creating API documentation, user guides, tutorials, or developer documentation. Expert at transforming complex technical concepts into clear, accessible documentation. |
| `data-pipeline-engineer` | data-engineering: Specialized data pipeline engineer with expertise in ETL/ELT, data orchestration, and data quality. Use when building data pipelines, implementing data transformations, or orchestr |
| `data-warehouse-engineer` | data-engineering: Specialized data warehouse engineer with expertise in schema design, OLAP, and query optimization. Use when designing data warehouses, implementing analytics solutions, or optimizi |
| `streaming-engineer` | data-engineering: Specialized streaming engineer with expertise in Kafka, real-time data processing, and event-driven systems. Use when implementing real-time data pipelines or stream processing sys |
| `database-designer` | database-engineering: Specialized database designer with expertise in schema design, normalization, and data modeling. Use when designing database schemas, modeling data relationships, or optimizing dat |
| `database-reliability-engineer` | database-engineering: Specialized database reliability engineer with expertise in database operations, backup/recovery, and high availability. Use when managing database reliability, implementing backup |
| `query-optimizer` | database-engineering: Specialized query optimizer with expertise in query performance, indexing strategies, and execution plans. Use when optimizing database queries, designing indexes, or improving que |
| `documentation-engineer` | documentation-engineering: Use this agent when you need to create or update technical documentation, API |
| `embedded-engineer` | embedded-development: Specialized embedded engineer with expertise in embedded systems, real-time operating systems, and hardware interfaces. Use when developing embedded systems, implementing device dr |
| `firmware-engineer` | embedded-development: Specialized firmware engineer with expertise in firmware development, bootloaders, and low-level system programming. Use when developing firmware, implementing bootloaders, or work |
| `iot-engineer` | embedded-development: Specialized IoT engineer with expertise in IoT protocols, device connectivity, and edge computing. Use when building IoT solutions, implementing device communication, or managing I |
| `presentation-engineer` | frontend-development: Use PROACTIVELY when designing UI layouts, building responsive interfaces, implementing design systems, or improving visual user experience. Expert in visual design principles, int |
| `game-developer` | game-development: Use when developing interactive entertainment experiences, implementing gameplay mechanics |
| `game-engine-architect` | game-development: Specialized game engine architect with expertise in engine architecture, rendering systems, and game physics. Use when designing game engines, implementing core engine systems, or  |
| `game-performance-engineer` | game-development: Specialized game performance engineer with expertise in game optimization, frame rate analysis, and resource management. Use when optimizing game performance, profiling frame rates |
| `game-tools-engineer` | game-development: Use when building game development tools, editors, asset pipelines, build systems, and |
| `gameplay-engineer` | game-development: Specialized gameplay engineer with expertise in game mechanics, player interaction, and game systems. Use when implementing gameplay features, designing game mechanics, or balancin |
| `technical-game-designer` | game-development: Use when bridging creative game design and engineering implementation. Expert in prototyping |
| `graphics-engineer` | graphics-engineering: Specialized graphics engineer with expertise in graphics APIs, rendering pipelines, and GPU programming. Use when implementing graphics features, optimizing rendering performance,  |
| `shader-engineer` | graphics-engineering: Specialized shader engineer with expertise in shader programming, GPU computation, and graphics optimization. Use when writing shaders, implementing graphics effects, or optimizing |
| `visualization-engineer` | graphics-engineering: Specialized visualization engineer with expertise in data visualization, charting libraries, and interactive graphics. Use when creating data visualizations, implementing charts an |
| `devops-engineer` | infrastructure-engineering: Use this agent when you need to manage CI/CD pipelines, deployment automation |
| `ml-inference-engineer` | machine-learning: Specialized ML inference engineer with expertise in model serving, optimization, edge deployment, and quantization. Use when optimizing model inference, implementing prediction API |
| `ml-pipeline-engineer` | machine-learning: Specialized ML pipeline engineer with expertise in data preparation, feature engineering, and training pipelines. Use when building ML training pipelines or implementing feature st |
| `mlops-engineer` | machine-learning: Specialized MLOps engineer with expertise in model deployment, monitoring, versioning, and A/B testing. Use when deploying ML models, setting up ML pipelines, or managing ML infras |
| `ios-developer` | mobile-development: Specialized iOS developer with expertise in iOS development, Swift/SwiftUI, and Apple platform integration. Use when building iOS apps, implementing iOS-specific features, or integ |
| `mobile-developer` | mobile-development: Specialized mobile developer with expertise in mobile app development, cross-platform frameworks, and mobile UX patterns. Use when building mobile applications, implementing mobile |
| `distributed-systems-engineer` | network-engineering: Specialized distributed systems engineer with expertise in distributed algorithms, consensus protocols, and fault tolerance. Use when building distributed systems, implementing con |
| `network-protocol-engineer` | network-engineering: Specialized network protocol engineer with expertise in protocol design, network programming, and communication patterns. Use when designing network protocols, implementing network |
| `service-mesh-engineer` | network-engineering: Specialized service mesh engineer with expertise in service mesh architecture, traffic management, and service discovery. Use when implementing service mesh, managing microservice  |
| `logging-engineer` | observability-engineering: Specialized logging engineer with expertise in log aggregation, log analysis, and structured logging. Use when implementing logging solutions, analyzing logs, or managing log infra |
| `monitoring-engineer` | observability-engineering: Specialized monitoring engineer with expertise in metrics collection, dashboards, and alerting systems. Use when setting up monitoring, creating dashboards, or configuring alerts. |
| `observability-engineer` | observability-engineering: Specialized observability engineer with expertise in monitoring, logging, tracing, and alerting. Use when implementing observability solutions, setting up monitoring infrastructure |
| `optimization-engineer` | performance-engineering: Specialized optimization engineer with expertise in code optimization, algorithmic improvements, and resource efficiency. Use when optimizing algorithms, reducing resource usage, o |
| `performance-engineer` | performance-engineering: Specialized performance engineer with expertise in performance profiling, optimization techniques, and load testing. Use when optimizing application performance, conducting perform |
| `scalability-engineer` | performance-engineering: Specialized scalability engineer with expertise in horizontal scaling, distributed systems, and capacity planning. Use when designing for scale, implementing distributed architectu |
| `developer-experience-engineer` | platform-engineering: Specialized developer experience engineer with expertise in developer tooling, onboarding, and productivity optimization. Use when improving developer experience, creating document |
| `infrastructure-engineer` | platform-engineering: Specialized infrastructure engineer with expertise in cloud infrastructure, infrastructure as code, and system reliability. Use when managing infrastructure, implementing IaC, or o |
| `platform-engineer` | platform-engineering: Specialized platform engineer with expertise in platform architecture, internal tooling, and developer productivity. Use when building internal platforms, implementing developer to |
| `the-visionary` | product-management: Use this agent when you need to transform vague requests into clear product |
| `flow-coordinator` | project-management: Use this agent when you need to understand or implement coordination patterns, workflow orchestration, or team collaboration strategies. Focuses on the philosophy and patterns of e |
| `technical-coordinator` | project-management: Use this agent for technical planning and implementation coordination. |
| `prompt-engineer` | prompt-engineering: Use PROACTIVELY when crafting prompts, managing AI workflows, coordinating agents, or optimizing Claude Code interactions. Expert in crafting clear instructions, managing context,  |
| `quality-strategist` | quality-engineering: Use this agent when you need to develop comprehensive testing strategies, define |
| `test-architect` | quality-engineering: Use this agent when you need to design test organization patterns, implement |
| `security-engineer` | security-engineering: Use this agent when you need to perform security assessments, fix |
| `site-reliability-engineer` | site-reliability-engineering: Use this agent when you need expertise in site reliability engineering |
| `solution-architect` | system-architecture: Use this agent for solving specific technical problems with architectural |
| `system-architect` | system-architecture: Use this agent for system architecture design and evaluation. |
| `voip-engineer` | voip-engineering: Use when working with VoIP systems, SIP protocol, telecommunications, or real-time communications. Expert in voice over IP infrastructure and protocols. |
| `test-generator` | playwright-mcp: Specialized agent for generating Playwright test cases from requirements and user flows. |
| `ui-debugger` | playwright-mcp: Specialized agent for debugging UI issues using Playwright inspection tools. |

# Other offerings
| Name | What it does |
| --- | --- |
| `han` CLI | packages/han (with `han-rs` Rust core) — installer and runtime powering the whole marketplace: `han plugin install --auto` project detection, `han hook run` execution engine behind every validation hook, unified MCP server, session/cost metrics, Browse UI. |
| Plugin marketplace | `.claude-plugin/marketplace.json` — the Han marketplace definition listing all plugins for `claude plugin` install. |
| Browse UI | packages/browse-client — web UI for browsing sessions, tool calls, token and cost rollups recorded by the han CLI. |
| MCP servers | Service plugins bundle MCP server configs: agent-sop, canva, clickup, figma, github, gitlab, jira, linear, notion, playwright-mcp, reddit, sentry, plus gluestack component discovery. Most use hosted OAuth servers, zero config. |
| Bridge plugins | bridges/antigravity, codex, gemini-cli, kiro, omp, opencode — translate other agents' events (OpenAI Codex CLI, Gemini CLI, Google Antigravity, Kiro, OpenCode, Oh My Pi) into Han hook invocations so the same validation ecosystem runs there. |
| bushido plugin | Injects the seven Bushido virtues (Righteousness, Courage, Compassion, Respect, Honesty, Honor, Loyalty) as session-start guidance. |
| Blueprints | blueprints/ — templates for technical blueprint documentation used by the tools/blueprints plugin. |
| cert-server / website | deploy infrastructure for han.guru install script and docs site. |
