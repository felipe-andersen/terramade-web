import * as React from 'react';
import { FeaturedProfessionals_provider_hook } from './featuredProfessionals';
import { Posts_provider_hook } from './post';

export const context_providers_hooks = {
    FeaturedProfessionals_provider_hook: FeaturedProfessionals_provider_hook(),
    Posts_provider_hook: Posts_provider_hook()
}

