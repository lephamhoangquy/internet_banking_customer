import { Routes } from '../../Routes/SideBarRoutes';

const Resource = (props) => {
  const { match } = props;
  const routeResource = Routes.find(
    (route) => route.id === match.params.sidebarID,
  );
  return routeResource.component;
};

export default Resource;
