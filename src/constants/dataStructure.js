{
    user: {
        type: user.data.type,
        id: user.data.id,
        first_name: user.data.attributes.first_name,
        last_name: user.data.attributes.last_name,
        email: user.data.attributes.email,
        organization: user.data.attributes.organization,
        group_name: user.data.attributes.group_name,
        first_address: user.data.attributes.first_address,
        second_address: user.data.attributes.second_address,
        city: user.data.attributes.city,
        state: user.data.attributes.state,
        zipcode: user.data.attributes.zipcode,
        country: user.data.attributes.country,
        phone: user.data.attributes.phone,
        is_active: true,
        created_at: user.data.attributes.created_at,
        updated_at: user.data.attributes.updated_at
    },
    role: {
        type: role.data.type,
        id: role.data.id,
        role: role.data.attributes.role,
        description: role.data.attributes.description,
        created_at: role.data.attributes.created_at,
        updated_at: role.data.attributes.updated_at,
        permissions: {
            data: [
                type: permission.data.type,
                id: permission.data.id,
                permission: permission.data.attributes.id,
                description: permission.data.attributes.description,
                created_at: permission.data.attributes.created_at,
                updated_at: permission.data.attributes.updated_at,
                resource: permission.data.attributes.resource
            ]
        }
    }
}