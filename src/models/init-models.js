import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _groups from  "./groups.js";
import _menu_sidebar from  "./menu_sidebar.js";
import _permissions from  "./permissions.js";
import _roles from  "./roles.js";
import _users from  "./users.js";
import _video_types from  "./video_types.js";
import _videos from  "./videos.js";

export default function initModels(sequelize) {
  const groups = _groups.init(sequelize, DataTypes);
  const menu_sidebar = _menu_sidebar.init(sequelize, DataTypes);
  const permissions = _permissions.init(sequelize, DataTypes);
  const roles = _roles.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);
  const video_types = _video_types.init(sequelize, DataTypes);
  const videos = _videos.init(sequelize, DataTypes);

  videos.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(videos, { as: "videos", foreignKey: "user_id"});
  videos.belongsTo(video_types, { as: "type", foreignKey: "type_id"});
  video_types.hasMany(videos, { as: "videos", foreignKey: "type_id"});

  return {
    groups,
    menu_sidebar,
    permissions,
    roles,
    users,
    video_types,
    videos,
  };
}
