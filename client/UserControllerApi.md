# .UserControllerApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteUser**](UserControllerApi.md#deleteUser) | **DELETE** /users/delete/{email} | 
[**login**](UserControllerApi.md#login) | **POST** /users/login | 
[**registerUser**](UserControllerApi.md#registerUser) | **POST** /users/register | 
[**updateRole**](UserControllerApi.md#updateRole) | **PATCH** /users/update-role | 


# **deleteUser**
> ResponseDTO deleteUser()


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserControllerApi(configuration);

let body:.UserControllerApiDeleteUserRequest = {
  // string
  email: "email_example",
  // string
  authorization: "Authorization_example",
};

apiInstance.deleteUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | [**string**] |  | defaults to undefined
 **authorization** | [**string**] |  | defaults to undefined


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **login**
> ResponseDTO login(userLoginDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserControllerApi(configuration);

let body:.UserControllerApiLoginRequest = {
  // UserLoginDTO
  userLoginDTO: {
    email: "email_example",
    password: "password_example",
  },
};

apiInstance.login(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userLoginDTO** | **UserLoginDTO**|  |


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **registerUser**
> ResponseDTO registerUser(userRegisterDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserControllerApi(configuration);

let body:.UserControllerApiRegisterUserRequest = {
  // UserRegisterDTO
  userRegisterDTO: {
    username: "username_example",
    email: "email_example",
    password: "password_example",
  },
};

apiInstance.registerUser(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRegisterDTO** | **UserRegisterDTO**|  |


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **updateRole**
> ResponseDTO updateRole(userUpdateRoleDTO)


### Example


```typescript
import {  } from '';
import * as fs from 'fs';

const configuration = .createConfiguration();
const apiInstance = new .UserControllerApi(configuration);

let body:.UserControllerApiUpdateRoleRequest = {
  // string
  authorization: "Authorization_example",
  // UserUpdateRoleDTO
  userUpdateRoleDTO: {
    email: "email_example",
    role: "role_example",
  },
};

apiInstance.updateRole(body).then((data:any) => {
  console.log('API called successfully. Returned data: ' + data);
}).catch((error:any) => console.error(error));
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userUpdateRoleDTO** | **UserUpdateRoleDTO**|  |
 **authorization** | [**string**] |  | defaults to undefined


### Return type

**ResponseDTO**

### Authorization

[bearerAuth](README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


