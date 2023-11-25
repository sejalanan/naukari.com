import {
	Box,
	Link,
	Stack,
	Popover,
	PopoverTrigger,
	PopoverContent,
  } from "@chakra-ui/react";
  import React from "react";
  import { useSelector } from "react-redux";
  import DesktopSubNav from "./DesktopSubNav";
  const MyNaukri = () => {
	  // eslint-disable-next-line no-unused-vars
	const { isAuth } = useSelector((state) => state.login);
	const myNaukri = [
	  {
		label: "Edit Profile",
		href: "/edit-profile", // Replace "#" with the actual edit profile route
	  },
	  {
		label: "Recommended Jobs",
		href: "/recommended-jobs", // Replace "#" with the actual recommended jobs route
	  },
	  {
		label: "Profile Performance",
		href: "/profile-performance", // Replace "#" with the actual profile performance route
	  },
	  {
		label: "Recruiter Message",
		href: "/recruiter-message", // Replace "#" with the actual recruiter message route
	  },
	  {
		label: "Application Status",
		href: "/application-status", // Replace "#" with the actual application status route
	  },
	  {
		label: "Manage Alert",
		href: "/manage-alert", // Replace "#" with the actual manage alert route
	  },
	  {
		label: "Setting",
		href: "/settings", // Replace "#" with the actual settings route
	  },
	  {
		label: "My Fastforward Services",
		href: "/fastforward-services", // Replace "#" with the actual fastforward services route
	  },
	  {
		label: "Logout",
		href: "/", // Replace "#" with the logout route, if necessary
	  },
	];
	return (
	  <Box w="100px" h="30px" _hover={{ borderBottom: "3px solid #006cb7" }}>
		<Popover trigger={"hover"} placement={"bottom-end"}>
		  <PopoverTrigger>
			<Link
			  p={2}
			  href={"#"}
			  fontSize={"13px"}
			  fontWeight={500}
			  color={"gray.500"}
			  _hover={{
				textDecoration: "none",
				color: "#006cb7",
				textAlign: "center", // Modified from "align" to "textAlign"
			  }}
			>
			  MY NAUKRI
			</Link>
		  </PopoverTrigger>
		  <PopoverContent fontSize="14px" bg="#f5f5f5" p={6}>
			<Stack spacing={0}>
			  {myNaukri.map((child) => (
				<DesktopSubNav key={child.label} {...child} />
			  ))}
			</Stack>
		  </PopoverContent>
		</Popover>
	  </Box>
	);
  };
  
  export default MyNaukri;
  