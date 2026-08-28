# Test Driven Development and Feature flagging in action

##  Date


##  Goals

- Discuss about how to develop a feature having
    - Test Driven Development
    - Feature flagging
- To demonstrate the development and challenges of the order synchronization service.
- Focused on implementing feature flagging for a specific functionality involving order status and ship branch issues.

## Areas of interest to cover

- Test Driven Development
- Unit tests
- Integration testing

## Context

- This is related to the functionality of autofixing the orders when talking about:
    - Wrong status
    - Wrong ship branch
- Orders in eclipse were being created either with wrong status or with wrong shipping branches
    - The goal was to make the order sync service to autofix the orders before reaching eclipse
        - For all delivery orders to be: "Ship When Available"
        - For all pick up orders to be: "Pick Up Now"
- There were several discussions where the requirements went through the following
    - Initial:
        - Ship When Available for everything, but wirecuts
        - Call when Complete for wirecuts
    - Implementation:
        - Ship When Available for all delivery orders
        - Pick Up Now for all pick up orders
    - Ideal:
        - Ship When Available for all orders
        - Controlled by a feature flag
- For the shipping branch only:
    - Initial:
        - Some cases with wrong shipping branches
    - Implementation:
        - Autofixed on a case basis by the order sync service for both delivery and pickup
    - Ideal:
        - Considering a feature flag

## Initial Functionality and Challenges

- Initial problem with order status and ship branch causing issues with Eclipse when incorrect data was created.
- The goal was to resolve issues for delivery and pickup orders related to:
    - Order status for delivery: Ship when available
    - Order status for pickup: Pickup now
- After further discussions, it was decided to standardize Ship when available for all orders, except for wire cuts.

## Implemented Functionality

- Introduced an autofix feature for order status and ship branch for delivery and pickup orders.
- The autofix was conditioned by feature flagging, which allowed toggling functionality as per the user’s needs.

## Development Process

### Feature Flagging

- A feature flag needs to be added to control the autofix functionality.
- The feature flag implementation went through several stages:
    - Initial implementation with default behavior.
    - A deeper focus on unit tests to ensure correctness.
    - Integration with the admin configuration to allow users to enable or disable features.

### Testing Approach

- Test-driven development (TDD) was used.
- Different scenarios were covered through unit tests and integration tests:
    - Delivery and pickup scenarios for different order statuses.
    - Testing both happy paths (successful outcomes) and error cases.
- Key variables tested:
    - Order status: Delivered, Picked up.
    - Shipping branch: Auto-fixed based on certain parameters.

### Integration Testing

- The integration tests ensure the feature flag working across the entire service.
- Covering the connection between `processOrderByID` and `processQueueRecords`.

## Conclusion of the Session

- This can serve as a walk through of the functionality and tests.
