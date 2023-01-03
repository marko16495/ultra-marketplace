## models/serialized

Interfaces in this folder represent raw JavaScript objects,
that are returned as a response from backend

These models should only be used inside `services/resource` and `services/data` folders

## models/public

Interfaces in this folder are used in components and inside `services/data` folder

## models/mappers

This folder contains functions for converting raw object (from models/serialized)
to objects that we use in our components (from models/public), and vice-versa

These functions should only be used inside `services/data` folder

