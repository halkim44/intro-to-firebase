import { Application } from "express";
import { all, create, get, patch, remove } from "./controller";
import { isAuthorized } from "../auth/authorized";
import { isAuthenticated } from "../auth/authenticated";

export function routesConfig(app: Application) {
  app.post(
    "/users",
    isAuthenticated,
    isAuthorized({ hasRole: ["admin", "manager"] }),
    create
  );
  // lists all users
  app.get("/users", [
    isAuthenticated,
    isAuthorized({ hasRole: ["admin", "manager"] }),
    all,
  ]);
  // get :id user
  app.get("/users/:id", [
    isAuthenticated,
    isAuthorized({ hasRole: ["admin", "manager"], allowSameUser: true }),
    get,
  ]);
  // update user id
  app.patch("/users/:id", [
    isAuthenticated,
    isAuthorized({ hasRole: ["admin", "manager"], allowSameUser: true }),
    patch,
  ]);
  // deletes :id user
  app.delete("/users/:id", [
    isAuthenticated,
    isAuthorized({ hasRole: ["admin", "manager"] }),
    remove,
  ]);
}
