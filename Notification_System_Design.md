# Stage 1

## Problem Statement

The objective is to identify the top 10 most important unread notifications from a stream of notifications.

## Priority Rules

Notifications are prioritized according to their type:

- Placement = Highest Priority
- Result = Medium Priority
- Event = Lowest Priority

Weights assigned:

- Placement = 3
- Result = 2
- Event = 1

## Sorting Logic

Notifications are sorted using:

1. Notification Weight (Descending)
2. Timestamp (Descending)

This ensures that:
- Placement notifications appear before Results and Events.
- Among notifications of the same type, newer notifications appear first.

## Algorithm

1. Fetch notifications from API.
2. Assign priority weight.
3. Sort notifications.
4. Select top 10 notifications.
5. Display output.

## Time Complexity

Sorting:
O(n log n)

## Efficient Real-Time Approach

If new notifications keep arriving continuously:

- Maintain a Min Heap of size 10.
- Compare incoming notifications with the lowest-priority item.
- Replace if higher priority.

Complexity:
O(log 10) per insertion.

## Conclusion

The proposed solution efficiently retrieves and maintains the top 10 highest-priority notifications while supporting future scalability.