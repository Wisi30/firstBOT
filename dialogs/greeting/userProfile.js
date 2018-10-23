// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/**
 * Simple user profile class.
 */
class UserProfile {
    constructor(name, city, age, job) {
        this.name = name || undefined;
        this.city = city || undefined;
        this.age = age || undefined;
        this.job = job || undefined;
    }
};

exports.UserProfile = UserProfile;
