const typeMap: { [pendingType: string]: string } = {};

/**
 * Map of pending action types (keys) to their resolved action types (values).
 *
 * When a new async pair is added to the application, add their types here so
 * that the API reducer responds to their state transitions appropriately.
 */
export const pendingToResolvedActionTypeMap = typeMap;
